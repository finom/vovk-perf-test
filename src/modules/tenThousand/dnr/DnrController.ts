import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnr")
export default class DnrController {
  @operation({
    summary: "Get Dnr",
  })
  @get()
  static getDnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnr",
  })
  @post("{id}")
  static createDnr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
