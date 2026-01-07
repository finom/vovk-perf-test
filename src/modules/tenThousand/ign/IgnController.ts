import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ign")
export default class IgnController {
  @operation({
    summary: "Get Ign",
  })
  @get()
  static getIgn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ign",
  })
  @post("{id}")
  static createIgn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
