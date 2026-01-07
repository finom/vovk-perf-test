import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mae")
export default class MaeController {
  @operation({
    summary: "Get Mae",
  })
  @get()
  static getMae = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mae",
  })
  @post("{id}")
  static createMae = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
