import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhe")
export default class BheController {
  @operation({
    summary: "Get Bhe",
  })
  @get()
  static getBhe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhe",
  })
  @post("{id}")
  static createBhe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
