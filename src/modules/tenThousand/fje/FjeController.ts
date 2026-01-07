import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fje")
export default class FjeController {
  @operation({
    summary: "Get Fje",
  })
  @get()
  static getFje = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fje",
  })
  @post("{id}")
  static createFje = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
