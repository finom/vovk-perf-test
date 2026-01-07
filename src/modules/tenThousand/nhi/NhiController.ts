import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhi")
export default class NhiController {
  @operation({
    summary: "Get Nhi",
  })
  @get()
  static getNhi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhi",
  })
  @post("{id}")
  static createNhi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
