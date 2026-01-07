import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhl")
export default class LhlController {
  @operation({
    summary: "Get Lhl",
  })
  @get()
  static getLhl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhl",
  })
  @post("{id}")
  static createLhl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
