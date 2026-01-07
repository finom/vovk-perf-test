import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyo")
export default class HyoController {
  @operation({
    summary: "Get Hyo",
  })
  @get()
  static getHyo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyo",
  })
  @post("{id}")
  static createHyo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
