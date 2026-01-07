import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iut")
export default class IutController {
  @operation({
    summary: "Get Iut",
  })
  @get()
  static getIut = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iut",
  })
  @post("{id}")
  static createIut = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
