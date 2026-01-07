import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eap")
export default class EapController {
  @operation({
    summary: "Get Eap",
  })
  @get()
  static getEap = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eap",
  })
  @post("{id}")
  static createEap = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
