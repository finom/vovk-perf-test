import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsw")
export default class DswController {
  @operation({
    summary: "Get Dsw",
  })
  @get()
  static getDsw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsw",
  })
  @post("{id}")
  static createDsw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
