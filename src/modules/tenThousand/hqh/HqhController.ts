import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqh")
export default class HqhController {
  @operation({
    summary: "Get Hqh",
  })
  @get()
  static getHqh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqh",
  })
  @post("{id}")
  static createHqh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
