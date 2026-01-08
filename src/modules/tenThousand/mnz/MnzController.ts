import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mnz")
export default class MnzController {
  @operation({
    summary: "Get Mnz",
  })
  @get()
  static getMnz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnz",
  })
  @post("{id}")
  static createMnz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
