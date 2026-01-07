import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fld")
export default class FldController {
  @operation({
    summary: "Get Fld",
  })
  @get()
  static getFld = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fld",
  })
  @post("{id}")
  static createFld = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
