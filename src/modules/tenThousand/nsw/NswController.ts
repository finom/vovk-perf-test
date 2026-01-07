import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsw")
export default class NswController {
  @operation({
    summary: "Get Nsw",
  })
  @get()
  static getNsw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsw",
  })
  @post("{id}")
  static createNsw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
