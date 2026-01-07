import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwy")
export default class MwyController {
  @operation({
    summary: "Get Mwy",
  })
  @get()
  static getMwy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwy",
  })
  @post("{id}")
  static createMwy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
