import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kms")
export default class KmsController {
  @operation({
    summary: "Get Kms",
  })
  @get()
  static getKms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kms",
  })
  @post("{id}")
  static createKms = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
