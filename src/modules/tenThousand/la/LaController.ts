import { procedure, prefix, get, post, operation } from "vovk";

@prefix("la")
export default class LaController {
  @operation({
    summary: "Get La",
  })
  @get()
  static getLa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create La",
  })
  @post("{id}")
  static createLa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
