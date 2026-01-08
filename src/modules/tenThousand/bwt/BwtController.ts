import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwt")
export default class BwtController {
  @operation({
    summary: "Get Bwt",
  })
  @get()
  static getBwt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwt",
  })
  @post("{id}")
  static createBwt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
