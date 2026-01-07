import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izh")
export default class IzhController {
  @operation({
    summary: "Get Izh",
  })
  @get()
  static getIzh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izh",
  })
  @post("{id}")
  static createIzh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
