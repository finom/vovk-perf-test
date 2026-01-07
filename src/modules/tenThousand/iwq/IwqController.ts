import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwq")
export default class IwqController {
  @operation({
    summary: "Get Iwq",
  })
  @get()
  static getIwq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwq",
  })
  @post("{id}")
  static createIwq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
