import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqi")
export default class HqiController {
  @operation({
    summary: "Get Hqi",
  })
  @get()
  static getHqi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqi",
  })
  @post("{id}")
  static createHqi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
