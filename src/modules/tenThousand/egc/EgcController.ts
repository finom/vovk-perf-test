import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egc")
export default class EgcController {
  @operation({
    summary: "Get Egc",
  })
  @get()
  static getEgc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egc",
  })
  @post("{id}")
  static createEgc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
