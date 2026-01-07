import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndz")
export default class NdzController {
  @operation({
    summary: "Get Ndz",
  })
  @get()
  static getNdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndz",
  })
  @post("{id}")
  static createNdz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
