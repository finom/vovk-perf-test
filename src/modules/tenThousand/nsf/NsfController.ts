import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsf")
export default class NsfController {
  @operation({
    summary: "Get Nsf",
  })
  @get()
  static getNsf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsf",
  })
  @post("{id}")
  static createNsf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
