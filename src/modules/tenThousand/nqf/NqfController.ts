import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqf")
export default class NqfController {
  @operation({
    summary: "Get Nqf",
  })
  @get()
  static getNqf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqf",
  })
  @post("{id}")
  static createNqf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
