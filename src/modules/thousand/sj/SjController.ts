import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("sj")
export default class SjController {
  @operation({
    summary: "Get Sj",
  })
  @get()
  static getSj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sj",
  })
  @post("{id}")
  static createSj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
