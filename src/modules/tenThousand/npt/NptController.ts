import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npt")
export default class NptController {
  @operation({
    summary: "Get Npt",
  })
  @get()
  static getNpt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npt",
  })
  @post("{id}")
  static createNpt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
