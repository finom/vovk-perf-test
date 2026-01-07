import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dau")
export default class DauController {
  @operation({
    summary: "Get Dau",
  })
  @get()
  static getDau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dau",
  })
  @post("{id}")
  static createDau = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
