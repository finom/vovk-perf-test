import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhe")
export default class LheController {
  @operation({
    summary: "Get Lhe",
  })
  @get()
  static getLhe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhe",
  })
  @post("{id}")
  static createLhe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
