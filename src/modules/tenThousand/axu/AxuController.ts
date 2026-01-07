import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axu")
export default class AxuController {
  @operation({
    summary: "Get Axu",
  })
  @get()
  static getAxu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axu",
  })
  @post("{id}")
  static createAxu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
