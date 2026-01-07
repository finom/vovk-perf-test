import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eet")
export default class EetController {
  @operation({
    summary: "Get Eet",
  })
  @get()
  static getEet = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eet",
  })
  @post("{id}")
  static createEet = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
