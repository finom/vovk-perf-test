import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecq")
export default class EcqController {
  @operation({
    summary: "Get Ecq",
  })
  @get()
  static getEcq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecq",
  })
  @post("{id}")
  static createEcq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
