import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drh")
export default class DrhController {
  @operation({
    summary: "Get Drh",
  })
  @get()
  static getDrh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drh",
  })
  @post("{id}")
  static createDrh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
