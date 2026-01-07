import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnd")
export default class GndController {
  @operation({
    summary: "Get Gnd",
  })
  @get()
  static getGnd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnd",
  })
  @post("{id}")
  static createGnd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
