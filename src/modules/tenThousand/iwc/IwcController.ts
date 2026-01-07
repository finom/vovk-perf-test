import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwc")
export default class IwcController {
  @operation({
    summary: "Get Iwc",
  })
  @get()
  static getIwc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwc",
  })
  @post("{id}")
  static createIwc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
