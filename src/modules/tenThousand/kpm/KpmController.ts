import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpm")
export default class KpmController {
  @operation({
    summary: "Get Kpm",
  })
  @get()
  static getKpm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpm",
  })
  @post("{id}")
  static createKpm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
