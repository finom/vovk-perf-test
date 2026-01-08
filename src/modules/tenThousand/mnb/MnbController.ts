import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mnb")
export default class MnbController {
  @operation({
    summary: "Get Mnb",
  })
  @get()
  static getMnb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnb",
  })
  @post("{id}")
  static createMnb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
