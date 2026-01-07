import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axi")
export default class AxiController {
  @operation({
    summary: "Get Axi",
  })
  @get()
  static getAxi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axi",
  })
  @post("{id}")
  static createAxi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
