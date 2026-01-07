import { procedure, prefix, get, post, operation } from "vovk";

@prefix("haz")
export default class HazController {
  @operation({
    summary: "Get Haz",
  })
  @get()
  static getHaz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Haz",
  })
  @post("{id}")
  static createHaz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
