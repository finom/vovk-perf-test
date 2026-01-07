import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlc")
export default class NlcController {
  @operation({
    summary: "Get Nlc",
  })
  @get()
  static getNlc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlc",
  })
  @post("{id}")
  static createNlc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
