import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvp")
export default class HvpController {
  @operation({
    summary: "Get Hvp",
  })
  @get()
  static getHvp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvp",
  })
  @post("{id}")
  static createHvp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
