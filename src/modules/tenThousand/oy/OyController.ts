import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oy")
export default class OyController {
  @operation({
    summary: "Get Oy",
  })
  @get()
  static getOy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Oy",
  })
  @post("{id}")
  static createOy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
