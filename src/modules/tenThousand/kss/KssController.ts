import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kss")
export default class KssController {
  @operation({
    summary: "Get Kss",
  })
  @get()
  static getKss = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kss",
  })
  @post("{id}")
  static createKss = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
