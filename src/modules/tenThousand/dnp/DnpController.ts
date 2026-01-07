import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnp")
export default class DnpController {
  @operation({
    summary: "Get Dnp",
  })
  @get()
  static getDnp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnp",
  })
  @post("{id}")
  static createDnp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
