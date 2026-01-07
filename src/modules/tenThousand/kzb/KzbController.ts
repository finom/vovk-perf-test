import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzb")
export default class KzbController {
  @operation({
    summary: "Get Kzb",
  })
  @get()
  static getKzb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzb",
  })
  @post("{id}")
  static createKzb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
