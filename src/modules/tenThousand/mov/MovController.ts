import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mov")
export default class MovController {
  @operation({
    summary: "Get Mov",
  })
  @get()
  static getMov = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mov",
  })
  @post("{id}")
  static createMov = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
