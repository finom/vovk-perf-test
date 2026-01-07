import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddz")
export default class DdzController {
  @operation({
    summary: "Get Ddz",
  })
  @get()
  static getDdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddz",
  })
  @post("{id}")
  static createDdz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
