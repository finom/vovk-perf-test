import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhh")
export default class NhhController {
  @operation({
    summary: "Get Nhh",
  })
  @get()
  static getNhh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhh",
  })
  @post("{id}")
  static createNhh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
