import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejf")
export default class EjfController {
  @operation({
    summary: "Get Ejf",
  })
  @get()
  static getEjf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejf",
  })
  @post("{id}")
  static createEjf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
