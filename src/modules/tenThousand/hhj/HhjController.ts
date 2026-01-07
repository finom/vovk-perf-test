import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhj")
export default class HhjController {
  @operation({
    summary: "Get Hhj",
  })
  @get()
  static getHhj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhj",
  })
  @post("{id}")
  static createHhj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
