import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fup")
export default class FupController {
  @operation({
    summary: "Get Fup",
  })
  @get()
  static getFup = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fup",
  })
  @post("{id}")
  static createFup = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
