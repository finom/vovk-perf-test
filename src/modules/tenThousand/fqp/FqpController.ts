import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqp")
export default class FqpController {
  @operation({
    summary: "Get Fqp",
  })
  @get()
  static getFqp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqp",
  })
  @post("{id}")
  static createFqp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
