import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cub")
export default class CubController {
  @operation({
    summary: "Get Cub",
  })
  @get()
  static getCub = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cub",
  })
  @post("{id}")
  static createCub = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
