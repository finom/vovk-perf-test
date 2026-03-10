import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("agw")
export default class AgwController {
  @operation({
    summary: "Get Agw",
  })
  @get()
  static getAgw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Agw",
  })
  @post("{id}")
  static createAgw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
