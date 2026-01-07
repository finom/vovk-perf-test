import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrj")
export default class MrjController {
  @operation({
    summary: "Get Mrj",
  })
  @get()
  static getMrj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrj",
  })
  @post("{id}")
  static createMrj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
