import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abf")
export default class AbfController {
  @operation({
    summary: "Get Abf",
  })
  @get()
  static getAbf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abf",
  })
  @post("{id}")
  static createAbf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
