import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izw")
export default class IzwController {
  @operation({
    summary: "Get Izw",
  })
  @get()
  static getIzw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izw",
  })
  @post("{id}")
  static createIzw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
