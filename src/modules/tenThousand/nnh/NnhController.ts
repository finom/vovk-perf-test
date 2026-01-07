import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnh")
export default class NnhController {
  @operation({
    summary: "Get Nnh",
  })
  @get()
  static getNnh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnh",
  })
  @post("{id}")
  static createNnh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
