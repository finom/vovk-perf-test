import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxt")
export default class BxtController {
  @operation({
    summary: "Get Bxt",
  })
  @get()
  static getBxt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxt",
  })
  @post("{id}")
  static createBxt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
