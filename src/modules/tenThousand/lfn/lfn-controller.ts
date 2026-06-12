import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfn")
export default class LfnController {
  @operation({
    summary: "Get Lfn",
  })
  @get()
  static getLfn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lfn",
  })
  @post("{id}")
  static createLfn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
