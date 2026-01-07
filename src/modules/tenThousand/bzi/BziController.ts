import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzi")
export default class BziController {
  @operation({
    summary: "Get Bzi",
  })
  @get()
  static getBzi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzi",
  })
  @post("{id}")
  static createBzi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
