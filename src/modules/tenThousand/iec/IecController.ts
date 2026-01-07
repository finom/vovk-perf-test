import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iec")
export default class IecController {
  @operation({
    summary: "Get Iec",
  })
  @get()
  static getIec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iec",
  })
  @post("{id}")
  static createIec = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
