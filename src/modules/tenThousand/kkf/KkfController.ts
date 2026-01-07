import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkf")
export default class KkfController {
  @operation({
    summary: "Get Kkf",
  })
  @get()
  static getKkf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkf",
  })
  @post("{id}")
  static createKkf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
