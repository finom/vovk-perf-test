import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsk")
export default class GskController {
  @operation({
    summary: "Get Gsk",
  })
  @get()
  static getGsk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsk",
  })
  @post("{id}")
  static createGsk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
