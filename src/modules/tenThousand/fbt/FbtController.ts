import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbt")
export default class FbtController {
  @operation({
    summary: "Get Fbt",
  })
  @get()
  static getFbt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbt",
  })
  @post("{id}")
  static createFbt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
