import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhn")
export default class FhnController {
  @operation({
    summary: "Get Fhn",
  })
  @get()
  static getFhn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhn",
  })
  @post("{id}")
  static createFhn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
