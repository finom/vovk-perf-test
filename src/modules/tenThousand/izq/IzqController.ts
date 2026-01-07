import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izq")
export default class IzqController {
  @operation({
    summary: "Get Izq",
  })
  @get()
  static getIzq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izq",
  })
  @post("{id}")
  static createIzq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
