import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwy")
export default class CwyController {
  @operation({
    summary: "Get Cwy",
  })
  @get()
  static getCwy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwy",
  })
  @post("{id}")
  static createCwy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
