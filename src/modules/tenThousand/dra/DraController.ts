import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dra")
export default class DraController {
  @operation({
    summary: "Get Dra",
  })
  @get()
  static getDra = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dra",
  })
  @post("{id}")
  static createDra = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
