import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efq")
export default class EfqController {
  @operation({
    summary: "Get Efq",
  })
  @get()
  static getEfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efq",
  })
  @post("{id}")
  static createEfq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
