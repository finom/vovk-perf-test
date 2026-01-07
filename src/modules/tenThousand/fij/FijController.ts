import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fij")
export default class FijController {
  @operation({
    summary: "Get Fij",
  })
  @get()
  static getFij = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fij",
  })
  @post("{id}")
  static createFij = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
