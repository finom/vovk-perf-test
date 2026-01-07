import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kro")
export default class KroController {
  @operation({
    summary: "Get Kro",
  })
  @get()
  static getKro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kro",
  })
  @post("{id}")
  static createKro = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
