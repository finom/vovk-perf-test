import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efp")
export default class EfpController {
  @operation({
    summary: "Get Efp",
  })
  @get()
  static getEfp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efp",
  })
  @post("{id}")
  static createEfp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
