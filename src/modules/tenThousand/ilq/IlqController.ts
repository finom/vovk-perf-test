import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilq")
export default class IlqController {
  @operation({
    summary: "Get Ilq",
  })
  @get()
  static getIlq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilq",
  })
  @post("{id}")
  static createIlq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
