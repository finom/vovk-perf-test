import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mnq")
export default class MnqController {
  @operation({
    summary: "Get Mnq",
  })
  @get()
  static getMnq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnq",
  })
  @post("{id}")
  static createMnq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
