import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvw")
export default class HvwController {
  @operation({
    summary: "Get Hvw",
  })
  @get()
  static getHvw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvw",
  })
  @post("{id}")
  static createHvw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
