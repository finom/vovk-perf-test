import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejq")
export default class EjqController {
  @operation({
    summary: "Get Ejq",
  })
  @get()
  static getEjq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejq",
  })
  @post("{id}")
  static createEjq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
