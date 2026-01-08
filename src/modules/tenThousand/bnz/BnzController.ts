import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bnz")
export default class BnzController {
  @operation({
    summary: "Get Bnz",
  })
  @get()
  static getBnz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnz",
  })
  @post("{id}")
  static createBnz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
