import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fne")
export default class FneController {
  @operation({
    summary: "Get Fne",
  })
  @get()
  static getFne = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fne",
  })
  @post("{id}")
  static createFne = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
