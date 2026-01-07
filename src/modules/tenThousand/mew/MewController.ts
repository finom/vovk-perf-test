import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mew")
export default class MewController {
  @operation({
    summary: "Get Mew",
  })
  @get()
  static getMew = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mew",
  })
  @post("{id}")
  static createMew = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
