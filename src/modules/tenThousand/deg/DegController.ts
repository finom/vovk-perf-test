import { procedure, prefix, get, post, operation } from "vovk";

@prefix("deg")
export default class DegController {
  @operation({
    summary: "Get Deg",
  })
  @get()
  static getDeg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Deg",
  })
  @post("{id}")
  static createDeg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
