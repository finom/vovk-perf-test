import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izv")
export default class IzvController {
  @operation({
    summary: "Get Izv",
  })
  @get()
  static getIzv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izv",
  })
  @post("{id}")
  static createIzv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
