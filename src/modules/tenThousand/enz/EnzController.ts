import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enz")
export default class EnzController {
  @operation({
    summary: "Get Enz",
  })
  @get()
  static getEnz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Enz",
  })
  @post("{id}")
  static createEnz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
