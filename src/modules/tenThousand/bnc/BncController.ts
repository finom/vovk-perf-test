import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bnc")
export default class BncController {
  @operation({
    summary: "Get Bnc",
  })
  @get()
  static getBnc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnc",
  })
  @post("{id}")
  static createBnc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
