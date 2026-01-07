import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqc")
export default class LqcController {
  @operation({
    summary: "Get Lqc",
  })
  @get()
  static getLqc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqc",
  })
  @post("{id}")
  static createLqc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
