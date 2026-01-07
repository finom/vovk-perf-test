import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgs")
export default class DgsController {
  @operation({
    summary: "Get Dgs",
  })
  @get()
  static getDgs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgs",
  })
  @post("{id}")
  static createDgs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
