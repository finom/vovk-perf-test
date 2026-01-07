import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihc")
export default class IhcController {
  @operation({
    summary: "Get Ihc",
  })
  @get()
  static getIhc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihc",
  })
  @post("{id}")
  static createIhc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
