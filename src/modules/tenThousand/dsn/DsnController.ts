import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dsn")
export default class DsnController {
  @operation({
    summary: "Get Dsn",
  })
  @get()
  static getDsn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsn",
  })
  @post("{id}")
  static createDsn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
