import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("tz")
export default class TzController {
  @operation({
    summary: "Get Tz",
  })
  @get()
  static getTz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tz",
  })
  @post("{id}")
  static createTz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
