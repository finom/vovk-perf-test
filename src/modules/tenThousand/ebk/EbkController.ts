import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebk")
export default class EbkController {
  @operation({
    summary: "Get Ebk",
  })
  @get()
  static getEbk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebk",
  })
  @post("{id}")
  static createEbk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
