import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdu")
export default class KduController {
  @operation({
    summary: "Get Kdu",
  })
  @get()
  static getKdu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdu",
  })
  @post("{id}")
  static createKdu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
