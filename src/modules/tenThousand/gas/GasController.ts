import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gas")
export default class GasController {
  @operation({
    summary: "Get Gas",
  })
  @get()
  static getGas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gas",
  })
  @post("{id}")
  static createGas = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
