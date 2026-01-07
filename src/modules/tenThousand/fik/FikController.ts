import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fik")
export default class FikController {
  @operation({
    summary: "Get Fik",
  })
  @get()
  static getFik = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fik",
  })
  @post("{id}")
  static createFik = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
