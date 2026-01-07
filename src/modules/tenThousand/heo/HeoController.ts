import { procedure, prefix, get, post, operation } from "vovk";

@prefix("heo")
export default class HeoController {
  @operation({
    summary: "Get Heo",
  })
  @get()
  static getHeo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Heo",
  })
  @post("{id}")
  static createHeo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
