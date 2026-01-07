import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krq")
export default class KrqController {
  @operation({
    summary: "Get Krq",
  })
  @get()
  static getKrq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krq",
  })
  @post("{id}")
  static createKrq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
