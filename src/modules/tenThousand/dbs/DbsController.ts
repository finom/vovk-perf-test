import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbs")
export default class DbsController {
  @operation({
    summary: "Get Dbs",
  })
  @get()
  static getDbs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbs",
  })
  @post("{id}")
  static createDbs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
