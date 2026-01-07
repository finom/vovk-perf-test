import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klu")
export default class KluController {
  @operation({
    summary: "Get Klu",
  })
  @get()
  static getKlu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klu",
  })
  @post("{id}")
  static createKlu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
