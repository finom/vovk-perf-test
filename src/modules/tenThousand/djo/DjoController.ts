import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djo")
export default class DjoController {
  @operation({
    summary: "Get Djo",
  })
  @get()
  static getDjo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Djo",
  })
  @post("{id}")
  static createDjo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
