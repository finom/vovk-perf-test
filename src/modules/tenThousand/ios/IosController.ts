import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ios")
export default class IosController {
  @operation({
    summary: "Get Ios",
  })
  @get()
  static getIos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ios",
  })
  @post("{id}")
  static createIos = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
