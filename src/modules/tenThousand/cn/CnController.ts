import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cn")
export default class CnController {
  @operation({
    summary: "Get Cn",
  })
  @get()
  static getCn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cn",
  })
  @post("{id}")
  static createCn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
