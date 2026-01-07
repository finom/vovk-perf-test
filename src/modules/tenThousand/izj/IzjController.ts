import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izj")
export default class IzjController {
  @operation({
    summary: "Get Izj",
  })
  @get()
  static getIzj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izj",
  })
  @post("{id}")
  static createIzj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
