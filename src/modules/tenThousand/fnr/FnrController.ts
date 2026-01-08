import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fnr")
export default class FnrController {
  @operation({
    summary: "Get Fnr",
  })
  @get()
  static getFnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnr",
  })
  @post("{id}")
  static createFnr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
