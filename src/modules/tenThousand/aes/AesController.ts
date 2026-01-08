import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aes")
export default class AesController {
  @operation({
    summary: "Get Aes",
  })
  @get()
  static getAes = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aes",
  })
  @post("{id}")
  static createAes = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
