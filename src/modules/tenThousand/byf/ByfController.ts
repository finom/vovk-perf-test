import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byf")
export default class ByfController {
  @operation({
    summary: "Get Byf",
  })
  @get()
  static getByf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byf",
  })
  @post("{id}")
  static createByf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
