import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejd")
export default class EjdController {
  @operation({
    summary: "Get Ejd",
  })
  @get()
  static getEjd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejd",
  })
  @post("{id}")
  static createEjd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
