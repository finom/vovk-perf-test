import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aew")
export default class AewController {
  @operation({
    summary: "Get Aew",
  })
  @get()
  static getAew = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aew",
  })
  @post("{id}")
  static createAew = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
