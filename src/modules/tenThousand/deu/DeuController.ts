import { procedure, prefix, get, post, operation } from "vovk";

@prefix("deu")
export default class DeuController {
  @operation({
    summary: "Get Deu",
  })
  @get()
  static getDeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Deu",
  })
  @post("{id}")
  static createDeu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
