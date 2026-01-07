import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwp")
export default class IwpController {
  @operation({
    summary: "Get Iwp",
  })
  @get()
  static getIwp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwp",
  })
  @post("{id}")
  static createIwp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
