import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("agx")
export default class AgxController {
  @operation({
    summary: "Get Agx",
  })
  @get()
  static getAgx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Agx",
  })
  @post("{id}")
  static createAgx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
