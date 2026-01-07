import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mra")
export default class MraController {
  @operation({
    summary: "Get Mra",
  })
  @get()
  static getMra = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mra",
  })
  @post("{id}")
  static createMra = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
