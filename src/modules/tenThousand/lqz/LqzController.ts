import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqz")
export default class LqzController {
  @operation({
    summary: "Get Lqz",
  })
  @get()
  static getLqz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqz",
  })
  @post("{id}")
  static createLqz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
