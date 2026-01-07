import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngj")
export default class NgjController {
  @operation({
    summary: "Get Ngj",
  })
  @get()
  static getNgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngj",
  })
  @post("{id}")
  static createNgj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
