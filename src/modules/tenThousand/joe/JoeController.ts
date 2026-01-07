import { procedure, prefix, get, post, operation } from "vovk";

@prefix("joe")
export default class JoeController {
  @operation({
    summary: "Get Joe",
  })
  @get()
  static getJoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Joe",
  })
  @post("{id}")
  static createJoe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
