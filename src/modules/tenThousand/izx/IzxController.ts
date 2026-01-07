import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izx")
export default class IzxController {
  @operation({
    summary: "Get Izx",
  })
  @get()
  static getIzx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izx",
  })
  @post("{id}")
  static createIzx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
