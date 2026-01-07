import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oe")
export default class OeController {
  @operation({
    summary: "Get Oe",
  })
  @get()
  static getOe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Oe",
  })
  @post("{id}")
  static createOe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
