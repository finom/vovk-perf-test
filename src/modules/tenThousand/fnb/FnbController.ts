import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fnb")
export default class FnbController {
  @operation({
    summary: "Get Fnb",
  })
  @get()
  static getFnb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnb",
  })
  @post("{id}")
  static createFnb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
