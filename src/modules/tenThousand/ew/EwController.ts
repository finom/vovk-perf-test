import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ew")
export default class EwController {
  @operation({
    summary: "Get Ew",
  })
  @get()
  static getEw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ew",
  })
  @post("{id}")
  static createEw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
