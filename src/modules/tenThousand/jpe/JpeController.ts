import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpe")
export default class JpeController {
  @operation({
    summary: "Get Jpe",
  })
  @get()
  static getJpe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpe",
  })
  @post("{id}")
  static createJpe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
