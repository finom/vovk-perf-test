import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hoz")
export default class HozController {
  @operation({
    summary: "Get Hoz",
  })
  @get()
  static getHoz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hoz",
  })
  @post("{id}")
  static createHoz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
