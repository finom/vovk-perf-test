import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjr")
export default class MjrController {
  @operation({
    summary: "Get Mjr",
  })
  @get()
  static getMjr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjr",
  })
  @post("{id}")
  static createMjr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
