import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pa")
export default class PaController {
  @operation({
    summary: "Get Pa",
  })
  @get()
  static getPa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pa",
  })
  @post("{id}")
  static createPa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
