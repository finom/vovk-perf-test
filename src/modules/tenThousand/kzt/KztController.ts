import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzt")
export default class KztController {
  @operation({
    summary: "Get Kzt",
  })
  @get()
  static getKzt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzt",
  })
  @post("{id}")
  static createKzt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
