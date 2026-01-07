import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nis")
export default class NisController {
  @operation({
    summary: "Get Nis",
  })
  @get()
  static getNis = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nis",
  })
  @post("{id}")
  static createNis = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
