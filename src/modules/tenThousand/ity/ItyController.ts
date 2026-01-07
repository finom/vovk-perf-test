import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ity")
export default class ItyController {
  @operation({
    summary: "Get Ity",
  })
  @get()
  static getIty = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ity",
  })
  @post("{id}")
  static createIty = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
