import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izp")
export default class IzpController {
  @operation({
    summary: "Get Izp",
  })
  @get()
  static getIzp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izp",
  })
  @post("{id}")
  static createIzp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
