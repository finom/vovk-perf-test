import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayi")
export default class AyiController {
  @operation({
    summary: "Get Ayi",
  })
  @get()
  static getAyi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayi",
  })
  @post("{id}")
  static createAyi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
