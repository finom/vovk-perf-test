import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eko")
export default class EkoController {
  @operation({
    summary: "Get Eko",
  })
  @get()
  static getEko = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eko",
  })
  @post("{id}")
  static createEko = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
