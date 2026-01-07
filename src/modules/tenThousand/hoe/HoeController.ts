import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hoe")
export default class HoeController {
  @operation({
    summary: "Get Hoe",
  })
  @get()
  static getHoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hoe",
  })
  @post("{id}")
  static createHoe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
