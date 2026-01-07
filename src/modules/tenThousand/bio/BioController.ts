import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bio")
export default class BioController {
  @operation({
    summary: "Get Bio",
  })
  @get()
  static getBio = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bio",
  })
  @post("{id}")
  static createBio = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
