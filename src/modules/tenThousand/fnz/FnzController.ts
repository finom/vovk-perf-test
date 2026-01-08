import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fnz")
export default class FnzController {
  @operation({
    summary: "Get Fnz",
  })
  @get()
  static getFnz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnz",
  })
  @post("{id}")
  static createFnz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
