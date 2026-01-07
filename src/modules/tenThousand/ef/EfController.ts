import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ef")
export default class EfController {
  @operation({
    summary: "Get Ef",
  })
  @get()
  static getEf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ef",
  })
  @post("{id}")
  static createEf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
