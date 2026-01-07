import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hie")
export default class HieController {
  @operation({
    summary: "Get Hie",
  })
  @get()
  static getHie = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hie",
  })
  @post("{id}")
  static createHie = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
