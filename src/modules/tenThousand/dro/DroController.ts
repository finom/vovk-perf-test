import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dro")
export default class DroController {
  @operation({
    summary: "Get Dro",
  })
  @get()
  static getDro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dro",
  })
  @post("{id}")
  static createDro = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
