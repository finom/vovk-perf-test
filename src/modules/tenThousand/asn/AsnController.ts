import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asn")
export default class AsnController {
  @operation({
    summary: "Get Asn",
  })
  @get()
  static getAsn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asn",
  })
  @post("{id}")
  static createAsn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
