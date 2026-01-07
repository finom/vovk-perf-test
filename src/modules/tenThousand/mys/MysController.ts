import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mys")
export default class MysController {
  @operation({
    summary: "Get Mys",
  })
  @get()
  static getMys = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mys",
  })
  @post("{id}")
  static createMys = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
