import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyy")
export default class KyyController {
  @operation({
    summary: "Get Kyy",
  })
  @get()
  static getKyy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyy",
  })
  @post("{id}")
  static createKyy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
