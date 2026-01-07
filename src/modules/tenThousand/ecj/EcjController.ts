import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecj")
export default class EcjController {
  @operation({
    summary: "Get Ecj",
  })
  @get()
  static getEcj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecj",
  })
  @post("{id}")
  static createEcj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
