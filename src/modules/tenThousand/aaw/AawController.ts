import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aaw")
export default class AawController {
  @operation({
    summary: "Get Aaw",
  })
  @get()
  static getAaw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aaw",
  })
  @post("{id}")
  static createAaw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
