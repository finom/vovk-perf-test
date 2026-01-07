import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inb")
export default class InbController {
  @operation({
    summary: "Get Inb",
  })
  @get()
  static getInb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inb",
  })
  @post("{id}")
  static createInb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
