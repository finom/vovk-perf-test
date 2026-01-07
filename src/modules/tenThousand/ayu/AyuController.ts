import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayu")
export default class AyuController {
  @operation({
    summary: "Get Ayu",
  })
  @get()
  static getAyu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayu",
  })
  @post("{id}")
  static createAyu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
