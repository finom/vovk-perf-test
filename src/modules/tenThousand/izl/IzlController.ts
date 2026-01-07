import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izl")
export default class IzlController {
  @operation({
    summary: "Get Izl",
  })
  @get()
  static getIzl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izl",
  })
  @post("{id}")
  static createIzl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
