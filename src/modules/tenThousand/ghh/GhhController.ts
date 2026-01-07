import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghh")
export default class GhhController {
  @operation({
    summary: "Get Ghh",
  })
  @get()
  static getGhh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghh",
  })
  @post("{id}")
  static createGhh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
