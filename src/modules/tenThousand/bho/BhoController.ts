import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bho")
export default class BhoController {
  @operation({
    summary: "Get Bho",
  })
  @get()
  static getBho = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bho",
  })
  @post("{id}")
  static createBho = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
