import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbc")
export default class BbcController {
  @operation({
    summary: "Get Bbc",
  })
  @get()
  static getBbc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbc",
  })
  @post("{id}")
  static createBbc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
