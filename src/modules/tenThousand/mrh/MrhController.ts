import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrh")
export default class MrhController {
  @operation({
    summary: "Get Mrh",
  })
  @get()
  static getMrh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrh",
  })
  @post("{id}")
  static createMrh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
