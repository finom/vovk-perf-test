import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjb")
export default class MjbController {
  @operation({
    summary: "Get Mjb",
  })
  @get()
  static getMjb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjb",
  })
  @post("{id}")
  static createMjb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
