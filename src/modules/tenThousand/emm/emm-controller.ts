import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("emm")
export default class EmmController {
  @operation({
    summary: "Get Emm",
  })
  @get()
  static getEmm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Emm",
  })
  @post("{id}")
  static createEmm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
