import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejy")
export default class EjyController {
  @operation({
    summary: "Get Ejy",
  })
  @get()
  static getEjy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejy",
  })
  @post("{id}")
  static createEjy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
