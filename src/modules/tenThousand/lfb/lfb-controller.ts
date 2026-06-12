import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfb")
export default class LfbController {
  @operation({
    summary: "Get Lfb",
  })
  @get()
  static getLfb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lfb",
  })
  @post("{id}")
  static createLfb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
