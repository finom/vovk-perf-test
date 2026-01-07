import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyo")
export default class CyoController {
  @operation({
    summary: "Get Cyo",
  })
  @get()
  static getCyo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyo",
  })
  @post("{id}")
  static createCyo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
