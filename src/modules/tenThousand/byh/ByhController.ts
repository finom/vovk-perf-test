import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byh")
export default class ByhController {
  @operation({
    summary: "Get Byh",
  })
  @get()
  static getByh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byh",
  })
  @post("{id}")
  static createByh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
