import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktr")
export default class KtrController {
  @operation({
    summary: "Get Ktr",
  })
  @get()
  static getKtr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktr",
  })
  @post("{id}")
  static createKtr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
