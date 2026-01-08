import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bmg")
export default class BmgController {
  @operation({
    summary: "Get Bmg",
  })
  @get()
  static getBmg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmg",
  })
  @post("{id}")
  static createBmg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
