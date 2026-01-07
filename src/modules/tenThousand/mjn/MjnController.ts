import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjn")
export default class MjnController {
  @operation({
    summary: "Get Mjn",
  })
  @get()
  static getMjn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjn",
  })
  @post("{id}")
  static createMjn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
