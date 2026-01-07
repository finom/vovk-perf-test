import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvb")
export default class HvbController {
  @operation({
    summary: "Get Hvb",
  })
  @get()
  static getHvb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvb",
  })
  @post("{id}")
  static createHvb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
