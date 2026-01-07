import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erm")
export default class ErmController {
  @operation({
    summary: "Get Erm",
  })
  @get()
  static getErm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Erm",
  })
  @post("{id}")
  static createErm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
