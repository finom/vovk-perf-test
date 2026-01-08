import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvs")
export default class FvsController {
  @operation({
    summary: "Get Fvs",
  })
  @get()
  static getFvs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvs",
  })
  @post("{id}")
  static createFvs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
