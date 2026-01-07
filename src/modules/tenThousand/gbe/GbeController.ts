import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbe")
export default class GbeController {
  @operation({
    summary: "Get Gbe",
  })
  @get()
  static getGbe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbe",
  })
  @post("{id}")
  static createGbe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
