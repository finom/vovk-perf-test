import { procedure, prefix, get, post, operation } from "vovk";

@prefix("klf")
export default class KlfController {
  @operation({
    summary: "Get Klf",
  })
  @get()
  static getKlf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klf",
  })
  @post("{id}")
  static createKlf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
