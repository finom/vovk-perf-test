import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luw")
export default class LuwController {
  @operation({
    summary: "Get Luw",
  })
  @get()
  static getLuw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Luw",
  })
  @post("{id}")
  static createLuw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
