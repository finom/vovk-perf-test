import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dax")
export default class DaxController {
  @operation({
    summary: "Get Dax",
  })
  @get()
  static getDax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dax",
  })
  @post("{id}")
  static createDax = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
