import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxy")
export default class KxyController {
  @operation({
    summary: "Get Kxy",
  })
  @get()
  static getKxy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxy",
  })
  @post("{id}")
  static createKxy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
