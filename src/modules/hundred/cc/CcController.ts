import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cc")
export default class CcController {
  @operation({
    summary: "Get Cc",
  })
  @get()
  static getCc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cc",
  })
  @post("{id}")
  static createCc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
