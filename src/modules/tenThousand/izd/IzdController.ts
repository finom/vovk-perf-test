import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izd")
export default class IzdController {
  @operation({
    summary: "Get Izd",
  })
  @get()
  static getIzd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izd",
  })
  @post("{id}")
  static createIzd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
