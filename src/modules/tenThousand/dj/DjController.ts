import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dj")
export default class DjController {
  @operation({
    summary: "Get Dj",
  })
  @get()
  static getDj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dj",
  })
  @post("{id}")
  static createDj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
