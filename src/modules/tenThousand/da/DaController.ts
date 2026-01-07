import { procedure, prefix, get, post, operation } from "vovk";

@prefix("da")
export default class DaController {
  @operation({
    summary: "Get Da",
  })
  @get()
  static getDa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Da",
  })
  @post("{id}")
  static createDa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
