import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muz")
export default class MuzController {
  @operation({
    summary: "Get Muz",
  })
  @get()
  static getMuz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Muz",
  })
  @post("{id}")
  static createMuz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
