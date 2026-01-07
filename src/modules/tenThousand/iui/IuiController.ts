import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iui")
export default class IuiController {
  @operation({
    summary: "Get Iui",
  })
  @get()
  static getIui = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iui",
  })
  @post("{id}")
  static createIui = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
