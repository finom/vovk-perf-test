import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejh")
export default class EjhController {
  @operation({
    summary: "Get Ejh",
  })
  @get()
  static getEjh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejh",
  })
  @post("{id}")
  static createEjh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
