import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isy")
export default class IsyController {
  @operation({
    summary: "Get Isy",
  })
  @get()
  static getIsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isy",
  })
  @post("{id}")
  static createIsy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
