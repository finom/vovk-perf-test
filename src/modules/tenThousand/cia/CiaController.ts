import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cia")
export default class CiaController {
  @operation({
    summary: "Get Cia",
  })
  @get()
  static getCia = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cia",
  })
  @post("{id}")
  static createCia = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
