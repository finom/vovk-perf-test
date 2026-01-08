import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebp")
export default class EbpController {
  @operation({
    summary: "Get Ebp",
  })
  @get()
  static getEbp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebp",
  })
  @post("{id}")
  static createEbp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
