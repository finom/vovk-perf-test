import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flf")
export default class FlfController {
  @operation({
    summary: "Get Flf",
  })
  @get()
  static getFlf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flf",
  })
  @post("{id}")
  static createFlf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
