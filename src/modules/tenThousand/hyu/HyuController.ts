import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyu")
export default class HyuController {
  @operation({
    summary: "Get Hyu",
  })
  @get()
  static getHyu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyu",
  })
  @post("{id}")
  static createHyu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
