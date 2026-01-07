import { procedure, prefix, get, post, operation } from "vovk";

@prefix("los")
export default class LosController {
  @operation({
    summary: "Get Los",
  })
  @get()
  static getLos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Los",
  })
  @post("{id}")
  static createLos = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
