import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbt")
export default class KbtController {
  @operation({
    summary: "Get Kbt",
  })
  @get()
  static getKbt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbt",
  })
  @post("{id}")
  static createKbt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
