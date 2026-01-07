import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khs")
export default class KhsController {
  @operation({
    summary: "Get Khs",
  })
  @get()
  static getKhs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khs",
  })
  @post("{id}")
  static createKhs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
