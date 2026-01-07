import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itf")
export default class ItfController {
  @operation({
    summary: "Get Itf",
  })
  @get()
  static getItf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itf",
  })
  @post("{id}")
  static createItf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
