import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfw")
export default class NfwController {
  @operation({
    summary: "Get Nfw",
  })
  @get()
  static getNfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfw",
  })
  @post("{id}")
  static createNfw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
