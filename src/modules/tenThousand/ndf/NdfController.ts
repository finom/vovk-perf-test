import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndf")
export default class NdfController {
  @operation({
    summary: "Get Ndf",
  })
  @get()
  static getNdf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndf",
  })
  @post("{id}")
  static createNdf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
