import { procedure, prefix, get, post, operation } from "vovk";

@prefix("we")
export default class WeController {
  @operation({
    summary: "Get We",
  })
  @get()
  static getWe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create We",
  })
  @post("{id}")
  static createWe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
