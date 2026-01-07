import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msw")
export default class MswController {
  @operation({
    summary: "Get Msw",
  })
  @get()
  static getMsw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msw",
  })
  @post("{id}")
  static createMsw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
