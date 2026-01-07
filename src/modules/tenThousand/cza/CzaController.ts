import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cza")
export default class CzaController {
  @operation({
    summary: "Get Cza",
  })
  @get()
  static getCza = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cza",
  })
  @post("{id}")
  static createCza = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
