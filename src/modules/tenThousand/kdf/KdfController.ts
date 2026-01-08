import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kdf")
export default class KdfController {
  @operation({
    summary: "Get Kdf",
  })
  @get()
  static getKdf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdf",
  })
  @post("{id}")
  static createKdf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
