import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngo")
export default class NgoController {
  @operation({
    summary: "Get Ngo",
  })
  @get()
  static getNgo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngo",
  })
  @post("{id}")
  static createNgo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
