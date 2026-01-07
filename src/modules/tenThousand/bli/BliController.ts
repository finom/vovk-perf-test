import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bli")
export default class BliController {
  @operation({
    summary: "Get Bli",
  })
  @get()
  static getBli = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bli",
  })
  @post("{id}")
  static createBli = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
