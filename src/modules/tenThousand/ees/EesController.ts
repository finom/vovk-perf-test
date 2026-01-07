import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ees")
export default class EesController {
  @operation({
    summary: "Get Ees",
  })
  @get()
  static getEes = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ees",
  })
  @post("{id}")
  static createEes = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
