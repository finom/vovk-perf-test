import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bar")
export default class BarController {
  @operation({
    summary: "Get Bar",
  })
  @get()
  static getBar = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bar",
  })
  @post("{id}")
  static createBar = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
