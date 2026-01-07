import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqd")
export default class KqdController {
  @operation({
    summary: "Get Kqd",
  })
  @get()
  static getKqd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqd",
  })
  @post("{id}")
  static createKqd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
