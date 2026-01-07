import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cin")
export default class CinController {
  @operation({
    summary: "Get Cin",
  })
  @get()
  static getCin = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cin",
  })
  @post("{id}")
  static createCin = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
