import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cea")
export default class CeaController {
  @operation({
    summary: "Get Cea",
  })
  @get()
  static getCea = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cea",
  })
  @post("{id}")
  static createCea = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
