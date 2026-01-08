import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

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
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
