import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evi")
export default class EviController {
  @operation({
    summary: "Get Evi",
  })
  @get()
  static getEvi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evi",
  })
  @post("{id}")
  static createEvi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
