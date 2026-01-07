import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enw")
export default class EnwController {
  @operation({
    summary: "Get Enw",
  })
  @get()
  static getEnw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Enw",
  })
  @post("{id}")
  static createEnw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
