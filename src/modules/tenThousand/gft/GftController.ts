import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gft")
export default class GftController {
  @operation({
    summary: "Get Gft",
  })
  @get()
  static getGft = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gft",
  })
  @post("{id}")
  static createGft = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
