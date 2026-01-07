import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ioq")
export default class IoqController {
  @operation({
    summary: "Get Ioq",
  })
  @get()
  static getIoq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ioq",
  })
  @post("{id}")
  static createIoq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
