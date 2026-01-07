import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gya")
export default class GyaController {
  @operation({
    summary: "Get Gya",
  })
  @get()
  static getGya = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gya",
  })
  @post("{id}")
  static createGya = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
