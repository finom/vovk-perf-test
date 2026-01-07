import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kad")
export default class KadController {
  @operation({
    summary: "Get Kad",
  })
  @get()
  static getKad = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kad",
  })
  @post("{id}")
  static createKad = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
