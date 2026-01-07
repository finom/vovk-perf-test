import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fad")
export default class FadController {
  @operation({
    summary: "Get Fad",
  })
  @get()
  static getFad = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fad",
  })
  @post("{id}")
  static createFad = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
