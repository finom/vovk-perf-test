import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uo")
export default class UoController {
  @operation({
    summary: "Get Uo",
  })
  @get()
  static getUo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Uo",
  })
  @post("{id}")
  static createUo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
