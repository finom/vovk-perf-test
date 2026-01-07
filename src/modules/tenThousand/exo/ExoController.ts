import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exo")
export default class ExoController {
  @operation({
    summary: "Get Exo",
  })
  @get()
  static getExo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exo",
  })
  @post("{id}")
  static createExo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
