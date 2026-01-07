import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkx")
export default class FkxController {
  @operation({
    summary: "Get Fkx",
  })
  @get()
  static getFkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkx",
  })
  @post("{id}")
  static createFkx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
