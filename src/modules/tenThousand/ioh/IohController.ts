import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ioh")
export default class IohController {
  @operation({
    summary: "Get Ioh",
  })
  @get()
  static getIoh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ioh",
  })
  @post("{id}")
  static createIoh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
