import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brn")
export default class BrnController {
  @operation({
    summary: "Get Brn",
  })
  @get()
  static getBrn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brn",
  })
  @post("{id}")
  static createBrn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
