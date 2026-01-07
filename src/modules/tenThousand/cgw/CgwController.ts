import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgw")
export default class CgwController {
  @operation({
    summary: "Get Cgw",
  })
  @get()
  static getCgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgw",
  })
  @post("{id}")
  static createCgw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
