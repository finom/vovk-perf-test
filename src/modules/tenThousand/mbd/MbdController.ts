import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbd")
export default class MbdController {
  @operation({
    summary: "Get Mbd",
  })
  @get()
  static getMbd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbd",
  })
  @post("{id}")
  static createMbd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
