import { procedure, prefix, get, post, operation } from "vovk";

@prefix("doh")
export default class DohController {
  @operation({
    summary: "Get Doh",
  })
  @get()
  static getDoh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Doh",
  })
  @post("{id}")
  static createDoh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
