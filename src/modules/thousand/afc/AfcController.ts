import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afc")
export default class AfcController {
  @operation({
    summary: "Get Afc",
  })
  @get()
  static getAfc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afc",
  })
  @post("{id}")
  static createAfc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
