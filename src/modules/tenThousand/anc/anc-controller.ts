import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("anc")
export default class AncController {
  @operation({
    summary: "Get Anc",
  })
  @get()
  static getAnc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Anc",
  })
  @post("{id}")
  static createAnc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
