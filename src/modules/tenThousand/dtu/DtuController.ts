import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtu")
export default class DtuController {
  @operation({
    summary: "Get Dtu",
  })
  @get()
  static getDtu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtu",
  })
  @post("{id}")
  static createDtu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
