import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kko")
export default class KkoController {
  @operation({
    summary: "Get Kko",
  })
  @get()
  static getKko = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kko",
  })
  @post("{id}")
  static createKko = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
