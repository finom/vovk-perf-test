import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hje")
export default class HjeController {
  @operation({
    summary: "Get Hje",
  })
  @get()
  static getHje = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hje",
  })
  @post("{id}")
  static createHje = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
