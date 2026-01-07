import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsh")
export default class NshController {
  @operation({
    summary: "Get Nsh",
  })
  @get()
  static getNsh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsh",
  })
  @post("{id}")
  static createNsh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
