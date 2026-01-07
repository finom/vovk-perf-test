import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsq")
export default class NsqController {
  @operation({
    summary: "Get Nsq",
  })
  @get()
  static getNsq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsq",
  })
  @post("{id}")
  static createNsq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
