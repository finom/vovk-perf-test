import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ckn")
export default class CknController {
  @operation({
    summary: "Get Ckn",
  })
  @get()
  static getCkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckn",
  })
  @post("{id}")
  static createCkn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
