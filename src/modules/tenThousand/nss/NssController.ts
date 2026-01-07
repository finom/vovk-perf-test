import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nss")
export default class NssController {
  @operation({
    summary: "Get Nss",
  })
  @get()
  static getNss = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nss",
  })
  @post("{id}")
  static createNss = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
