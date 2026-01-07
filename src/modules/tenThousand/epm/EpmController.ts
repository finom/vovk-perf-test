import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epm")
export default class EpmController {
  @operation({
    summary: "Get Epm",
  })
  @get()
  static getEpm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epm",
  })
  @post("{id}")
  static createEpm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
