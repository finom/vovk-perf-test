import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eof")
export default class EofController {
  @operation({
    summary: "Get Eof",
  })
  @get()
  static getEof = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eof",
  })
  @post("{id}")
  static createEof = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
