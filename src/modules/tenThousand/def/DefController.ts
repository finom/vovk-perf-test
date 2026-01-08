import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("def")
export default class DefController {
  @operation({
    summary: "Get Def",
  })
  @get()
  static getDef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Def",
  })
  @post("{id}")
  static createDef = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
