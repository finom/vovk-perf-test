import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blx")
export default class BlxController {
  @operation({
    summary: "Get Blx",
  })
  @get()
  static getBlx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blx",
  })
  @post("{id}")
  static createBlx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
