import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdc")
export default class FdcController {
  @operation({
    summary: "Get Fdc",
  })
  @get()
  static getFdc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdc",
  })
  @post("{id}")
  static createFdc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
