import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejc")
export default class EjcController {
  @operation({
    summary: "Get Ejc",
  })
  @get()
  static getEjc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejc",
  })
  @post("{id}")
  static createEjc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
