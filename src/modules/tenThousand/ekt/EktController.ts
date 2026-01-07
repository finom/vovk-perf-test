import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekt")
export default class EktController {
  @operation({
    summary: "Get Ekt",
  })
  @get()
  static getEkt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekt",
  })
  @post("{id}")
  static createEkt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
