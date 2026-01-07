import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foc")
export default class FocController {
  @operation({
    summary: "Get Foc",
  })
  @get()
  static getFoc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Foc",
  })
  @post("{id}")
  static createFoc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
