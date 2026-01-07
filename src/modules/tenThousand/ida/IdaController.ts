import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ida")
export default class IdaController {
  @operation({
    summary: "Get Ida",
  })
  @get()
  static getIda = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ida",
  })
  @post("{id}")
  static createIda = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
