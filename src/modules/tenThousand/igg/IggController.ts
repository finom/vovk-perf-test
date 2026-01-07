import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igg")
export default class IggController {
  @operation({
    summary: "Get Igg",
  })
  @get()
  static getIgg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igg",
  })
  @post("{id}")
  static createIgg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
