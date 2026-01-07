import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gar")
export default class GarController {
  @operation({
    summary: "Get Gar",
  })
  @get()
  static getGar = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gar",
  })
  @post("{id}")
  static createGar = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
