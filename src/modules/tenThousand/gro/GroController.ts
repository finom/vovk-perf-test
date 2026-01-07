import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gro")
export default class GroController {
  @operation({
    summary: "Get Gro",
  })
  @get()
  static getGro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gro",
  })
  @post("{id}")
  static createGro = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
