import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("chv")
export default class ChvController {
  @operation({
    summary: "Get Chv",
  })
  @get()
  static getChv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chv",
  })
  @post("{id}")
  static createChv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
