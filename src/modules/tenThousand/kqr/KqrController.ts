import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqr")
export default class KqrController {
  @operation({
    summary: "Get Kqr",
  })
  @get()
  static getKqr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqr",
  })
  @post("{id}")
  static createKqr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
