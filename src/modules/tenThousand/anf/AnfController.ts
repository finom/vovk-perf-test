import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anf")
export default class AnfController {
  @operation({
    summary: "Get Anf",
  })
  @get()
  static getAnf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Anf",
  })
  @post("{id}")
  static createAnf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
