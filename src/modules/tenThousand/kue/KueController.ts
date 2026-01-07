import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kue")
export default class KueController {
  @operation({
    summary: "Get Kue",
  })
  @get()
  static getKue = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kue",
  })
  @post("{id}")
  static createKue = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
