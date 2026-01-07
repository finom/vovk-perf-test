import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iof")
export default class IofController {
  @operation({
    summary: "Get Iof",
  })
  @get()
  static getIof = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iof",
  })
  @post("{id}")
  static createIof = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
