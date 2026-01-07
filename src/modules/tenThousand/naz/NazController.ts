import { procedure, prefix, get, post, operation } from "vovk";

@prefix("naz")
export default class NazController {
  @operation({
    summary: "Get Naz",
  })
  @get()
  static getNaz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Naz",
  })
  @post("{id}")
  static createNaz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
