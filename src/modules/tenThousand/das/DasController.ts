import { procedure, prefix, get, post, operation } from "vovk";

@prefix("das")
export default class DasController {
  @operation({
    summary: "Get Das",
  })
  @get()
  static getDas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Das",
  })
  @post("{id}")
  static createDas = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
