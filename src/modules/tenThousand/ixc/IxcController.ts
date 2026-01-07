import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixc")
export default class IxcController {
  @operation({
    summary: "Get Ixc",
  })
  @get()
  static getIxc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixc",
  })
  @post("{id}")
  static createIxc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
