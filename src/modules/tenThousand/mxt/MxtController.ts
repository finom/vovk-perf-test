import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxt")
export default class MxtController {
  @operation({
    summary: "Get Mxt",
  })
  @get()
  static getMxt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxt",
  })
  @post("{id}")
  static createMxt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
