import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsj")
export default class NsjController {
  @operation({
    summary: "Get Nsj",
  })
  @get()
  static getNsj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsj",
  })
  @post("{id}")
  static createNsj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
