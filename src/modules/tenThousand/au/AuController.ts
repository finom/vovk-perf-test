import { procedure, prefix, get, post, operation } from "vovk";

@prefix("au")
export default class AuController {
  @operation({
    summary: "Get Au",
  })
  @get()
  static getAu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Au",
  })
  @post("{id}")
  static createAu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
