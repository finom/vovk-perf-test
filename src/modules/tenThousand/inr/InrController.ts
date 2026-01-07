import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inr")
export default class InrController {
  @operation({
    summary: "Get Inr",
  })
  @get()
  static getInr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inr",
  })
  @post("{id}")
  static createInr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
