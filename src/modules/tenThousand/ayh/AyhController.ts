import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayh")
export default class AyhController {
  @operation({
    summary: "Get Ayh",
  })
  @get()
  static getAyh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayh",
  })
  @post("{id}")
  static createAyh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
