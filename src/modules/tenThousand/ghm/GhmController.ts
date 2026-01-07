import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghm")
export default class GhmController {
  @operation({
    summary: "Get Ghm",
  })
  @get()
  static getGhm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghm",
  })
  @post("{id}")
  static createGhm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
