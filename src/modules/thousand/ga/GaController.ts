import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ga")
export default class GaController {
  @operation({
    summary: "Get Ga",
  })
  @get()
  static getGa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ga",
  })
  @post("{id}")
  static createGa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
