import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzt")
export default class FztController {
  @operation({
    summary: "Get Fzt",
  })
  @get()
  static getFzt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzt",
  })
  @post("{id}")
  static createFzt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
