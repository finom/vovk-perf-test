import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqi")
export default class LqiController {
  @operation({
    summary: "Get Lqi",
  })
  @get()
  static getLqi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqi",
  })
  @post("{id}")
  static createLqi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
