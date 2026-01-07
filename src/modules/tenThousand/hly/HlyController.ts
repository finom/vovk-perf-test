import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hly")
export default class HlyController {
  @operation({
    summary: "Get Hly",
  })
  @get()
  static getHly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hly",
  })
  @post("{id}")
  static createHly = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
