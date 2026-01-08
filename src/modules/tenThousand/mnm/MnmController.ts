import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mnm")
export default class MnmController {
  @operation({
    summary: "Get Mnm",
  })
  @get()
  static getMnm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnm",
  })
  @post("{id}")
  static createMnm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
