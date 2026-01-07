import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fds")
export default class FdsController {
  @operation({
    summary: "Get Fds",
  })
  @get()
  static getFds = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fds",
  })
  @post("{id}")
  static createFds = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
