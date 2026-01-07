import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hes")
export default class HesController {
  @operation({
    summary: "Get Hes",
  })
  @get()
  static getHes = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hes",
  })
  @post("{id}")
  static createHes = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
