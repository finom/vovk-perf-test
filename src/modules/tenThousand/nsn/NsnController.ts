import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsn")
export default class NsnController {
  @operation({
    summary: "Get Nsn",
  })
  @get()
  static getNsn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsn",
  })
  @post("{id}")
  static createNsn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
