import { procedure, prefix, get, post, operation } from "vovk";

@prefix("con")
export default class ConController {
  @operation({
    summary: "Get Con",
  })
  @get()
  static getCon = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Con",
  })
  @post("{id}")
  static createCon = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
