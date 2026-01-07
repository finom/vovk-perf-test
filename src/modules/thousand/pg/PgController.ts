import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pg")
export default class PgController {
  @operation({
    summary: "Get Pg",
  })
  @get()
  static getPg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pg",
  })
  @post("{id}")
  static createPg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
