import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imn")
export default class ImnController {
  @operation({
    summary: "Get Imn",
  })
  @get()
  static getImn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imn",
  })
  @post("{id}")
  static createImn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
