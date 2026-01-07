import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cew")
export default class CewController {
  @operation({
    summary: "Get Cew",
  })
  @get()
  static getCew = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cew",
  })
  @post("{id}")
  static createCew = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
