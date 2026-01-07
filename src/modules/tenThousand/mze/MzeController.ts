import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mze")
export default class MzeController {
  @operation({
    summary: "Get Mze",
  })
  @get()
  static getMze = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mze",
  })
  @post("{id}")
  static createMze = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
