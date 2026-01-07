import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzu")
export default class MzuController {
  @operation({
    summary: "Get Mzu",
  })
  @get()
  static getMzu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzu",
  })
  @post("{id}")
  static createMzu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
