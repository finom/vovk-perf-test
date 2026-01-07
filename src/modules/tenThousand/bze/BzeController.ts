import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bze")
export default class BzeController {
  @operation({
    summary: "Get Bze",
  })
  @get()
  static getBze = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bze",
  })
  @post("{id}")
  static createBze = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
