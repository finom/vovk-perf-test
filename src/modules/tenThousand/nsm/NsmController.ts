import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsm")
export default class NsmController {
  @operation({
    summary: "Get Nsm",
  })
  @get()
  static getNsm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsm",
  })
  @post("{id}")
  static createNsm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
