import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kax")
export default class KaxController {
  @operation({
    summary: "Get Kax",
  })
  @get()
  static getKax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kax",
  })
  @post("{id}")
  static createKax = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
