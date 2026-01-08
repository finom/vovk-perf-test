import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kkv")
export default class KkvController {
  @operation({
    summary: "Get Kkv",
  })
  @get()
  static getKkv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkv",
  })
  @post("{id}")
  static createKkv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
