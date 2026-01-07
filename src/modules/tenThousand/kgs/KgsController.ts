import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgs")
export default class KgsController {
  @operation({
    summary: "Get Kgs",
  })
  @get()
  static getKgs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgs",
  })
  @post("{id}")
  static createKgs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
