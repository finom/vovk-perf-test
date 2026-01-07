import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mia")
export default class MiaController {
  @operation({
    summary: "Get Mia",
  })
  @get()
  static getMia = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mia",
  })
  @post("{id}")
  static createMia = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
