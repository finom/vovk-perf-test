import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibi")
export default class IbiController {
  @operation({
    summary: "Get Ibi",
  })
  @get()
  static getIbi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibi",
  })
  @post("{id}")
  static createIbi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
