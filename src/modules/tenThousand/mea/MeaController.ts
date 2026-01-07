import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mea")
export default class MeaController {
  @operation({
    summary: "Get Mea",
  })
  @get()
  static getMea = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mea",
  })
  @post("{id}")
  static createMea = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
