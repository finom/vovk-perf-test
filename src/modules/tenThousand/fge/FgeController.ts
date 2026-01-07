import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fge")
export default class FgeController {
  @operation({
    summary: "Get Fge",
  })
  @get()
  static getFge = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fge",
  })
  @post("{id}")
  static createFge = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
