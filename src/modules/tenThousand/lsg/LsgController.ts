import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsg")
export default class LsgController {
  @operation({
    summary: "Get Lsg",
  })
  @get()
  static getLsg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsg",
  })
  @post("{id}")
  static createLsg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
