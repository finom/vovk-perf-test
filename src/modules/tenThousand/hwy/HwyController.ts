import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwy")
export default class HwyController {
  @operation({
    summary: "Get Hwy",
  })
  @get()
  static getHwy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwy",
  })
  @post("{id}")
  static createHwy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
