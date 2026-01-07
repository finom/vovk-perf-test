import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qt")
export default class QtController {
  @operation({
    summary: "Get Qt",
  })
  @get()
  static getQt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qt",
  })
  @post("{id}")
  static createQt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
