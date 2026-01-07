import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kme")
export default class KmeController {
  @operation({
    summary: "Get Kme",
  })
  @get()
  static getKme = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kme",
  })
  @post("{id}")
  static createKme = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
