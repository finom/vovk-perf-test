import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izz")
export default class IzzController {
  @operation({
    summary: "Get Izz",
  })
  @get()
  static getIzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izz",
  })
  @post("{id}")
  static createIzz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
