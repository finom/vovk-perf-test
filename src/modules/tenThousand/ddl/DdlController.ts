import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddl")
export default class DdlController {
  @operation({
    summary: "Get Ddl",
  })
  @get()
  static getDdl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddl",
  })
  @post("{id}")
  static createDdl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
