import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbd")
export default class DbdController {
  @operation({
    summary: "Get Dbd",
  })
  @get()
  static getDbd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbd",
  })
  @post("{id}")
  static createDbd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
