import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fo")
export default class FoController {
  @operation({
    summary: "Get Fo",
  })
  @get()
  static getFo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fo",
  })
  @post("{id}")
  static createFo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
