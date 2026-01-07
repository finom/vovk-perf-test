import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xl")
export default class XlController {
  @operation({
    summary: "Get Xl",
  })
  @get()
  static getXl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xl",
  })
  @post("{id}")
  static createXl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
