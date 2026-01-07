import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iok")
export default class IokController {
  @operation({
    summary: "Get Iok",
  })
  @get()
  static getIok = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iok",
  })
  @post("{id}")
  static createIok = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
