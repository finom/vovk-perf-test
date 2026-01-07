import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izm")
export default class IzmController {
  @operation({
    summary: "Get Izm",
  })
  @get()
  static getIzm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izm",
  })
  @post("{id}")
  static createIzm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
