import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eni")
export default class EniController {
  @operation({
    summary: "Get Eni",
  })
  @get()
  static getEni = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eni",
  })
  @post("{id}")
  static createEni = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
