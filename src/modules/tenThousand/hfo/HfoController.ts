import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfo")
export default class HfoController {
  @operation({
    summary: "Get Hfo",
  })
  @get()
  static getHfo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfo",
  })
  @post("{id}")
  static createHfo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
