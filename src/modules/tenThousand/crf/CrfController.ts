import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("crf")
export default class CrfController {
  @operation({
    summary: "Get Crf",
  })
  @get()
  static getCrf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crf",
  })
  @post("{id}")
  static createCrf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
