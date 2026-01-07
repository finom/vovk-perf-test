import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhx")
export default class NhxController {
  @operation({
    summary: "Get Nhx",
  })
  @get()
  static getNhx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhx",
  })
  @post("{id}")
  static createNhx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
