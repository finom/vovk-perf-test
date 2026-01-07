import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyz")
export default class DyzController {
  @operation({
    summary: "Get Dyz",
  })
  @get()
  static getDyz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyz",
  })
  @post("{id}")
  static createDyz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
