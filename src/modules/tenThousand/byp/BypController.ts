import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byp")
export default class BypController {
  @operation({
    summary: "Get Byp",
  })
  @get()
  static getByp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byp",
  })
  @post("{id}")
  static createByp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
