import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fax")
export default class FaxController {
  @operation({
    summary: "Get Fax",
  })
  @get()
  static getFax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fax",
  })
  @post("{id}")
  static createFax = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
