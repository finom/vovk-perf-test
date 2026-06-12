import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mni")
export default class MniController {
  @operation({
    summary: "Get Mni",
  })
  @get()
  static getMni = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mni",
  })
  @post("{id}")
  static createMni = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
