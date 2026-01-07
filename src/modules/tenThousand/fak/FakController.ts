import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fak")
export default class FakController {
  @operation({
    summary: "Get Fak",
  })
  @get()
  static getFak = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fak",
  })
  @post("{id}")
  static createFak = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
