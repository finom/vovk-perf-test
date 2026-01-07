import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egj")
export default class EgjController {
  @operation({
    summary: "Get Egj",
  })
  @get()
  static getEgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egj",
  })
  @post("{id}")
  static createEgj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
