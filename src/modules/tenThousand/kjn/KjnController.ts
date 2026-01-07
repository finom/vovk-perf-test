import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjn")
export default class KjnController {
  @operation({
    summary: "Get Kjn",
  })
  @get()
  static getKjn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjn",
  })
  @post("{id}")
  static createKjn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
