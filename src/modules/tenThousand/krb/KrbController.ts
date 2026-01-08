import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("krb")
export default class KrbController {
  @operation({
    summary: "Get Krb",
  })
  @get()
  static getKrb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krb",
  })
  @post("{id}")
  static createKrb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
