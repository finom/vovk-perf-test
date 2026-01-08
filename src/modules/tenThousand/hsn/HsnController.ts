import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hsn")
export default class HsnController {
  @operation({
    summary: "Get Hsn",
  })
  @get()
  static getHsn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsn",
  })
  @post("{id}")
  static createHsn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
