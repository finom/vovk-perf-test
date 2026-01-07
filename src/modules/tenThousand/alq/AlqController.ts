import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alq")
export default class AlqController {
  @operation({
    summary: "Get Alq",
  })
  @get()
  static getAlq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alq",
  })
  @post("{id}")
  static createAlq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
