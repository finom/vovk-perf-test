import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dno")
export default class DnoController {
  @operation({
    summary: "Get Dno",
  })
  @get()
  static getDno = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dno",
  })
  @post("{id}")
  static createDno = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
