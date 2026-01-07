import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afl")
export default class AflController {
  @operation({
    summary: "Get Afl",
  })
  @get()
  static getAfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afl",
  })
  @post("{id}")
  static createAfl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
