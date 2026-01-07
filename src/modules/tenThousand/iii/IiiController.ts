import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iii")
export default class IiiController {
  @operation({
    summary: "Get Iii",
  })
  @get()
  static getIii = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iii",
  })
  @post("{id}")
  static createIii = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
