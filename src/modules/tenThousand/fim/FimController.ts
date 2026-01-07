import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fim")
export default class FimController {
  @operation({
    summary: "Get Fim",
  })
  @get()
  static getFim = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fim",
  })
  @post("{id}")
  static createFim = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
