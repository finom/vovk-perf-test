import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aw")
export default class AwController {
  @operation({
    summary: "Get Aw",
  })
  @get()
  static getAw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aw",
  })
  @post("{id}")
  static createAw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
