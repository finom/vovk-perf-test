import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isj")
export default class IsjController {
  @operation({
    summary: "Get Isj",
  })
  @get()
  static getIsj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isj",
  })
  @post("{id}")
  static createIsj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
