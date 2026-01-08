import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ft")
export default class FtController {
  @operation({
    summary: "Get Ft",
  })
  @get()
  static getFt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ft",
  })
  @post("{id}")
  static createFt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
