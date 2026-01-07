import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsb")
export default class NsbController {
  @operation({
    summary: "Get Nsb",
  })
  @get()
  static getNsb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsb",
  })
  @post("{id}")
  static createNsb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
