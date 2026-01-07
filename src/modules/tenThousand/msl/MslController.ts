import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msl")
export default class MslController {
  @operation({
    summary: "Get Msl",
  })
  @get()
  static getMsl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msl",
  })
  @post("{id}")
  static createMsl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
