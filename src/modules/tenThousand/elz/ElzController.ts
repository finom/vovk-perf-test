import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elz")
export default class ElzController {
  @operation({
    summary: "Get Elz",
  })
  @get()
  static getElz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elz",
  })
  @post("{id}")
  static createElz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
