import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqm")
export default class AqmController {
  @operation({
    summary: "Get Aqm",
  })
  @get()
  static getAqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqm",
  })
  @post("{id}")
  static createAqm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
