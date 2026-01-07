import { procedure, prefix, get, post, operation } from "vovk";

@prefix("du")
export default class DuController {
  @operation({
    summary: "Get Du",
  })
  @get()
  static getDu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Du",
  })
  @post("{id}")
  static createDu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
