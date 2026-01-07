import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eco")
export default class EcoController {
  @operation({
    summary: "Get Eco",
  })
  @get()
  static getEco = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eco",
  })
  @post("{id}")
  static createEco = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
