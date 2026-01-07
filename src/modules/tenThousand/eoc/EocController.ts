import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eoc")
export default class EocController {
  @operation({
    summary: "Get Eoc",
  })
  @get()
  static getEoc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eoc",
  })
  @post("{id}")
  static createEoc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
