import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpa")
export default class JpaController {
  @operation({
    summary: "Get Jpa",
  })
  @get()
  static getJpa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpa",
  })
  @post("{id}")
  static createJpa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
