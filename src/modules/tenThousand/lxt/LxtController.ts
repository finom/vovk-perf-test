import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxt")
export default class LxtController {
  @operation({
    summary: "Get Lxt",
  })
  @get()
  static getLxt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxt",
  })
  @post("{id}")
  static createLxt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
