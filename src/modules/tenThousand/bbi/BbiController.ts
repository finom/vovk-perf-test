import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbi")
export default class BbiController {
  @operation({
    summary: "Get Bbi",
  })
  @get()
  static getBbi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbi",
  })
  @post("{id}")
  static createBbi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
