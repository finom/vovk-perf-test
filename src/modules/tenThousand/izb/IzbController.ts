import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izb")
export default class IzbController {
  @operation({
    summary: "Get Izb",
  })
  @get()
  static getIzb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izb",
  })
  @post("{id}")
  static createIzb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
