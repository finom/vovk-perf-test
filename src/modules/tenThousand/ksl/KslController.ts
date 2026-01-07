import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksl")
export default class KslController {
  @operation({
    summary: "Get Ksl",
  })
  @get()
  static getKsl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksl",
  })
  @post("{id}")
  static createKsl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
