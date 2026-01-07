import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrh")
export default class LrhController {
  @operation({
    summary: "Get Lrh",
  })
  @get()
  static getLrh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrh",
  })
  @post("{id}")
  static createLrh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
