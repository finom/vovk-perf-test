import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpl")
export default class BplController {
  @operation({
    summary: "Get Bpl",
  })
  @get()
  static getBpl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpl",
  })
  @post("{id}")
  static createBpl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
