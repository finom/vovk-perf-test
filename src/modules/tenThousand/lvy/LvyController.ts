import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvy")
export default class LvyController {
  @operation({
    summary: "Get Lvy",
  })
  @get()
  static getLvy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvy",
  })
  @post("{id}")
  static createLvy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
