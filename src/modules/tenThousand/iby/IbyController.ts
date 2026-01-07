import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iby")
export default class IbyController {
  @operation({
    summary: "Get Iby",
  })
  @get()
  static getIby = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iby",
  })
  @post("{id}")
  static createIby = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
