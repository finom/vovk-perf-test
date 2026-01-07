import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnf")
export default class HnfController {
  @operation({
    summary: "Get Hnf",
  })
  @get()
  static getHnf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnf",
  })
  @post("{id}")
  static createHnf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
