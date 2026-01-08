import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kem")
export default class KemController {
  @operation({
    summary: "Get Kem",
  })
  @get()
  static getKem = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kem",
  })
  @post("{id}")
  static createKem = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
