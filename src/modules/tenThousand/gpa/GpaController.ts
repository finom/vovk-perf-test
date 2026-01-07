import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpa")
export default class GpaController {
  @operation({
    summary: "Get Gpa",
  })
  @get()
  static getGpa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpa",
  })
  @post("{id}")
  static createGpa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
