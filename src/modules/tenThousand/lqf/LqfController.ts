import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqf")
export default class LqfController {
  @operation({
    summary: "Get Lqf",
  })
  @get()
  static getLqf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqf",
  })
  @post("{id}")
  static createLqf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
