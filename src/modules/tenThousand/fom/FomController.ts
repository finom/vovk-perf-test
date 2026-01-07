import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fom")
export default class FomController {
  @operation({
    summary: "Get Fom",
  })
  @get()
  static getFom = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fom",
  })
  @post("{id}")
  static createFom = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
