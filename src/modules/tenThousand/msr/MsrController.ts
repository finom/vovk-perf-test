import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msr")
export default class MsrController {
  @operation({
    summary: "Get Msr",
  })
  @get()
  static getMsr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msr",
  })
  @post("{id}")
  static createMsr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
