import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gff")
export default class GffController {
  @operation({
    summary: "Get Gff",
  })
  @get()
  static getGff = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gff",
  })
  @post("{id}")
  static createGff = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
