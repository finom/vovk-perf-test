import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsz")
export default class NszController {
  @operation({
    summary: "Get Nsz",
  })
  @get()
  static getNsz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsz",
  })
  @post("{id}")
  static createNsz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
