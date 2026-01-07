import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nke")
export default class NkeController {
  @operation({
    summary: "Get Nke",
  })
  @get()
  static getNke = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nke",
  })
  @post("{id}")
  static createNke = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
