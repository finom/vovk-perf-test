import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgs")
export default class HgsController {
  @operation({
    summary: "Get Hgs",
  })
  @get()
  static getHgs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgs",
  })
  @post("{id}")
  static createHgs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
