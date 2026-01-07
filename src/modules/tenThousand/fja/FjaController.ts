import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fja")
export default class FjaController {
  @operation({
    summary: "Get Fja",
  })
  @get()
  static getFja = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fja",
  })
  @post("{id}")
  static createFja = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
