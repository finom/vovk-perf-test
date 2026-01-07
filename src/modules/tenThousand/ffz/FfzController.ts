import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffz")
export default class FfzController {
  @operation({
    summary: "Get Ffz",
  })
  @get()
  static getFfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffz",
  })
  @post("{id}")
  static createFfz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
