import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rz")
export default class RzController {
  @operation({
    summary: "Get Rz",
  })
  @get()
  static getRz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rz",
  })
  @post("{id}")
  static createRz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
