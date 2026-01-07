import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnp")
export default class CnpController {
  @operation({
    summary: "Get Cnp",
  })
  @get()
  static getCnp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnp",
  })
  @post("{id}")
  static createCnp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
