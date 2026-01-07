import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amv")
export default class AmvController {
  @operation({
    summary: "Get Amv",
  })
  @get()
  static getAmv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amv",
  })
  @post("{id}")
  static createAmv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
