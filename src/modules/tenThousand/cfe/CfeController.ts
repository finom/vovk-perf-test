import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfe")
export default class CfeController {
  @operation({
    summary: "Get Cfe",
  })
  @get()
  static getCfe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfe",
  })
  @post("{id}")
  static createCfe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
