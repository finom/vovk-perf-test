import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dks")
export default class DksController {
  @operation({
    summary: "Get Dks",
  })
  @get()
  static getDks = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dks",
  })
  @post("{id}")
  static createDks = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
