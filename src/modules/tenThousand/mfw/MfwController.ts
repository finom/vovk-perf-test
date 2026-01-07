import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfw")
export default class MfwController {
  @operation({
    summary: "Get Mfw",
  })
  @get()
  static getMfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfw",
  })
  @post("{id}")
  static createMfw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
