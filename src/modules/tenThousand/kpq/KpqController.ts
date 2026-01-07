import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpq")
export default class KpqController {
  @operation({
    summary: "Get Kpq",
  })
  @get()
  static getKpq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpq",
  })
  @post("{id}")
  static createKpq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
