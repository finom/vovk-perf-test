import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alx")
export default class AlxController {
  @operation({
    summary: "Get Alx",
  })
  @get()
  static getAlx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alx",
  })
  @post("{id}")
  static createAlx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
