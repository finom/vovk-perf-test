import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("pq")
export default class PqController {
  @operation({
    summary: "Get Pq",
  })
  @get()
  static getPq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pq",
  })
  @post("{id}")
  static createPq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
