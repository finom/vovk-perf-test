import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gil")
export default class GilController {
  @operation({
    summary: "Get Gil",
  })
  @get()
  static getGil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gil",
  })
  @post("{id}")
  static createGil = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
