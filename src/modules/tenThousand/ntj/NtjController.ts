import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntj")
export default class NtjController {
  @operation({
    summary: "Get Ntj",
  })
  @get()
  static getNtj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ntj",
  })
  @post("{id}")
  static createNtj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
