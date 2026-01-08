import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("asr")
export default class AsrController {
  @operation({
    summary: "Get Asr",
  })
  @get()
  static getAsr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asr",
  })
  @post("{id}")
  static createAsr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
