import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khl")
export default class KhlController {
  @operation({
    summary: "Get Khl",
  })
  @get()
  static getKhl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khl",
  })
  @post("{id}")
  static createKhl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
