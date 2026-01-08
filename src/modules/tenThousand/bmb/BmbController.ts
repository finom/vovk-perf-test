import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bmb")
export default class BmbController {
  @operation({
    summary: "Get Bmb",
  })
  @get()
  static getBmb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmb",
  })
  @post("{id}")
  static createBmb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
