import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aio")
export default class AioController {
  @operation({
    summary: "Get Aio",
  })
  @get()
  static getAio = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aio",
  })
  @post("{id}")
  static createAio = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
