import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aep")
export default class AepController {
  @operation({
    summary: "Get Aep",
  })
  @get()
  static getAep = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aep",
  })
  @post("{id}")
  static createAep = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
