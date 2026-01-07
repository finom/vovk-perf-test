import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuc")
export default class IucController {
  @operation({
    summary: "Get Iuc",
  })
  @get()
  static getIuc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iuc",
  })
  @post("{id}")
  static createIuc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
