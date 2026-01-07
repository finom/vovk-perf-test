import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpl")
export default class JplController {
  @operation({
    summary: "Get Jpl",
  })
  @get()
  static getJpl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpl",
  })
  @post("{id}")
  static createJpl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
