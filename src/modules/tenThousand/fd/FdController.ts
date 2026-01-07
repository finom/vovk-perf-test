import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fd")
export default class FdController {
  @operation({
    summary: "Get Fd",
  })
  @get()
  static getFd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fd",
  })
  @post("{id}")
  static createFd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
