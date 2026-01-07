import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyc")
export default class IycController {
  @operation({
    summary: "Get Iyc",
  })
  @get()
  static getIyc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyc",
  })
  @post("{id}")
  static createIyc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
