import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzu")
export default class FzuController {
  @operation({
    summary: "Get Fzu",
  })
  @get()
  static getFzu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzu",
  })
  @post("{id}")
  static createFzu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
