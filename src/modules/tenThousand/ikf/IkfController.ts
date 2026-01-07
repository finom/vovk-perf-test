import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikf")
export default class IkfController {
  @operation({
    summary: "Get Ikf",
  })
  @get()
  static getIkf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikf",
  })
  @post("{id}")
  static createIkf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
