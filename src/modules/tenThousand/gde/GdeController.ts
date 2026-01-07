import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gde")
export default class GdeController {
  @operation({
    summary: "Get Gde",
  })
  @get()
  static getGde = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gde",
  })
  @post("{id}")
  static createGde = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
