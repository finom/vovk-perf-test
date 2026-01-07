import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfs")
export default class GfsController {
  @operation({
    summary: "Get Gfs",
  })
  @get()
  static getGfs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfs",
  })
  @post("{id}")
  static createGfs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
