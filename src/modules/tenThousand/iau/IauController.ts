import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iau")
export default class IauController {
  @operation({
    summary: "Get Iau",
  })
  @get()
  static getIau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iau",
  })
  @post("{id}")
  static createIau = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
