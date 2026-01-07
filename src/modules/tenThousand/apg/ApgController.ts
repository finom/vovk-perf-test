import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apg")
export default class ApgController {
  @operation({
    summary: "Get Apg",
  })
  @get()
  static getApg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apg",
  })
  @post("{id}")
  static createApg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
