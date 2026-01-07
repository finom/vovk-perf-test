import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icn")
export default class IcnController {
  @operation({
    summary: "Get Icn",
  })
  @get()
  static getIcn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icn",
  })
  @post("{id}")
  static createIcn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
