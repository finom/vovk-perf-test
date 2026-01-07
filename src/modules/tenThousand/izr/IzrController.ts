import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izr")
export default class IzrController {
  @operation({
    summary: "Get Izr",
  })
  @get()
  static getIzr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izr",
  })
  @post("{id}")
  static createIzr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
