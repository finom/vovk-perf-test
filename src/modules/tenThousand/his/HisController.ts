import { procedure, prefix, get, post, operation } from "vovk";

@prefix("his")
export default class HisController {
  @operation({
    summary: "Get His",
  })
  @get()
  static getHis = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create His",
  })
  @post("{id}")
  static createHis = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
