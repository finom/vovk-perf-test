import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxx")
export default class FxxController {
  @operation({
    summary: "Get Fxx",
  })
  @get()
  static getFxx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxx",
  })
  @post("{id}")
  static createFxx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
