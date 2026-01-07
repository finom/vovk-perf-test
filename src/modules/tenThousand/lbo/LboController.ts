import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbo")
export default class LboController {
  @operation({
    summary: "Get Lbo",
  })
  @get()
  static getLbo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbo",
  })
  @post("{id}")
  static createLbo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
