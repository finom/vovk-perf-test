import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsv")
export default class NsvController {
  @operation({
    summary: "Get Nsv",
  })
  @get()
  static getNsv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsv",
  })
  @post("{id}")
  static createNsv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
