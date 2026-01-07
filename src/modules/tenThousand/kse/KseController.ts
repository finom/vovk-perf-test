import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kse")
export default class KseController {
  @operation({
    summary: "Get Kse",
  })
  @get()
  static getKse = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kse",
  })
  @post("{id}")
  static createKse = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
