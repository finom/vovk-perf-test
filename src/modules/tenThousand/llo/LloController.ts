import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llo")
export default class LloController {
  @operation({
    summary: "Get Llo",
  })
  @get()
  static getLlo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llo",
  })
  @post("{id}")
  static createLlo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
