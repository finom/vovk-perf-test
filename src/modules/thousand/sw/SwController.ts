import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sw")
export default class SwController {
  @operation({
    summary: "Get Sw",
  })
  @get()
  static getSw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sw",
  })
  @post("{id}")
  static createSw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
