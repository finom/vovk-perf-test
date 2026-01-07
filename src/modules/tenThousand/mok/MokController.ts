import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mok")
export default class MokController {
  @operation({
    summary: "Get Mok",
  })
  @get()
  static getMok = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mok",
  })
  @post("{id}")
  static createMok = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
