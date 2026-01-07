import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eoe")
export default class EoeController {
  @operation({
    summary: "Get Eoe",
  })
  @get()
  static getEoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eoe",
  })
  @post("{id}")
  static createEoe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
