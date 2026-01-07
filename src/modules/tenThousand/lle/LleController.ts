import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lle")
export default class LleController {
  @operation({
    summary: "Get Lle",
  })
  @get()
  static getLle = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lle",
  })
  @post("{id}")
  static createLle = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
