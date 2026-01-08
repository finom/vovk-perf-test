import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mnx")
export default class MnxController {
  @operation({
    summary: "Get Mnx",
  })
  @get()
  static getMnx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnx",
  })
  @post("{id}")
  static createMnx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
