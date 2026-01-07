import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
