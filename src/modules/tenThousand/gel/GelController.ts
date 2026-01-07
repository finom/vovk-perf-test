import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gel")
export default class GelController {
  @operation({
    summary: "Get Gel",
  })
  @get()
  static getGel = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gel",
  })
  @post("{id}")
  static createGel = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
