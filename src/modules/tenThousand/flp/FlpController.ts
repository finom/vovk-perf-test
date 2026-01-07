import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flp")
export default class FlpController {
  @operation({
    summary: "Get Flp",
  })
  @get()
  static getFlp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flp",
  })
  @post("{id}")
  static createFlp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
