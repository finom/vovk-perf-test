import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgf")
export default class DgfController {
  @operation({
    summary: "Get Dgf",
  })
  @get()
  static getDgf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgf",
  })
  @post("{id}")
  static createDgf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
