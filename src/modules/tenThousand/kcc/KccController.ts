import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcc")
export default class KccController {
  @operation({
    summary: "Get Kcc",
  })
  @get()
  static getKcc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcc",
  })
  @post("{id}")
  static createKcc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
