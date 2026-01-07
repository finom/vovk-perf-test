import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izf")
export default class IzfController {
  @operation({
    summary: "Get Izf",
  })
  @get()
  static getIzf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izf",
  })
  @post("{id}")
  static createIzf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
