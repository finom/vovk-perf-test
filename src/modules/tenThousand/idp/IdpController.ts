import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idp")
export default class IdpController {
  @operation({
    summary: "Get Idp",
  })
  @get()
  static getIdp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idp",
  })
  @post("{id}")
  static createIdp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
