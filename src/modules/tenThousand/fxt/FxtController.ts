import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxt")
export default class FxtController {
  @operation({
    summary: "Get Fxt",
  })
  @get()
  static getFxt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxt",
  })
  @post("{id}")
  static createFxt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
