import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("agt")
export default class AgtController {
  @operation({
    summary: "Get Agt",
  })
  @get()
  static getAgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agt",
  })
  @post("{id}")
  static createAgt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
