import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anb")
export default class AnbController {
  @operation({
    summary: "Get Anb",
  })
  @get()
  static getAnb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Anb",
  })
  @post("{id}")
  static createAnb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
