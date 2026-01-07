import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bn")
export default class BnController {
  @operation({
    summary: "Get Bn",
  })
  @get()
  static getBn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bn",
  })
  @post("{id}")
  static createBn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
