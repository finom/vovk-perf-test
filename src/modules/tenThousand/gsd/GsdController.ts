import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsd")
export default class GsdController {
  @operation({
    summary: "Get Gsd",
  })
  @get()
  static getGsd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsd",
  })
  @post("{id}")
  static createGsd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
