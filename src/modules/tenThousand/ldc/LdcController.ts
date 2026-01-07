import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldc")
export default class LdcController {
  @operation({
    summary: "Get Ldc",
  })
  @get()
  static getLdc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldc",
  })
  @post("{id}")
  static createLdc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
