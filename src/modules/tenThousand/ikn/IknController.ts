import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikn")
export default class IknController {
  @operation({
    summary: "Get Ikn",
  })
  @get()
  static getIkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikn",
  })
  @post("{id}")
  static createIkn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
