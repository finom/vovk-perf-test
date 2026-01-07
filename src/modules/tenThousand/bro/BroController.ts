import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bro")
export default class BroController {
  @operation({
    summary: "Get Bro",
  })
  @get()
  static getBro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bro",
  })
  @post("{id}")
  static createBro = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
