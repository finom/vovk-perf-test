import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbu")
export default class NbuController {
  @operation({
    summary: "Get Nbu",
  })
  @get()
  static getNbu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbu",
  })
  @post("{id}")
  static createNbu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
