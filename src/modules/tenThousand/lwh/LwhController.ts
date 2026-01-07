import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwh")
export default class LwhController {
  @operation({
    summary: "Get Lwh",
  })
  @get()
  static getLwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwh",
  })
  @post("{id}")
  static createLwh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
