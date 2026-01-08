import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bmr")
export default class BmrController {
  @operation({
    summary: "Get Bmr",
  })
  @get()
  static getBmr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmr",
  })
  @post("{id}")
  static createBmr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
