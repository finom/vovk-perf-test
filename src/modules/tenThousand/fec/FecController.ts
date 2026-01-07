import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fec")
export default class FecController {
  @operation({
    summary: "Get Fec",
  })
  @get()
  static getFec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fec",
  })
  @post("{id}")
  static createFec = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
