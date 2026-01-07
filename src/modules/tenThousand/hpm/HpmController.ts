import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpm")
export default class HpmController {
  @operation({
    summary: "Get Hpm",
  })
  @get()
  static getHpm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpm",
  })
  @post("{id}")
  static createHpm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
