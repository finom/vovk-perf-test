import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvv")
export default class HvvController {
  @operation({
    summary: "Get Hvv",
  })
  @get()
  static getHvv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvv",
  })
  @post("{id}")
  static createHvv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
