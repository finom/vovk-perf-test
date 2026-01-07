import { procedure, prefix, get, post, operation } from "vovk";

@prefix("io")
export default class IoController {
  @operation({
    summary: "Get Io",
  })
  @get()
  static getIo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Io",
  })
  @post("{id}")
  static createIo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
