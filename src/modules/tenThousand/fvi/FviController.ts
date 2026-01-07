import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvi")
export default class FviController {
  @operation({
    summary: "Get Fvi",
  })
  @get()
  static getFvi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvi",
  })
  @post("{id}")
  static createFvi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
