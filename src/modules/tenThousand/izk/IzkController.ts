import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izk")
export default class IzkController {
  @operation({
    summary: "Get Izk",
  })
  @get()
  static getIzk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izk",
  })
  @post("{id}")
  static createIzk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
