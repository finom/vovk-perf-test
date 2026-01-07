import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqe")
export default class NqeController {
  @operation({
    summary: "Get Nqe",
  })
  @get()
  static getNqe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqe",
  })
  @post("{id}")
  static createNqe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
