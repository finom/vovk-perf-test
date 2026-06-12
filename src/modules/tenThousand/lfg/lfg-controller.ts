import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfg")
export default class LfgController {
  @operation({
    summary: "Get Lfg",
  })
  @get()
  static getLfg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lfg",
  })
  @post("{id}")
  static createLfg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
