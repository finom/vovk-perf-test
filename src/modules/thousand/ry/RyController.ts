import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ry")
export default class RyController {
  @operation({
    summary: "Get Ry",
  })
  @get()
  static getRy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ry",
  })
  @post("{id}")
  static createRy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
