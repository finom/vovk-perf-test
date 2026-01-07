import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fon")
export default class FonController {
  @operation({
    summary: "Get Fon",
  })
  @get()
  static getFon = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fon",
  })
  @post("{id}")
  static createFon = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
