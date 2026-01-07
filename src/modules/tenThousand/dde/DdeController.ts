import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dde")
export default class DdeController {
  @operation({
    summary: "Get Dde",
  })
  @get()
  static getDde = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dde",
  })
  @post("{id}")
  static createDde = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
