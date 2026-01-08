import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("pm")
export default class PmController {
  @operation({
    summary: "Get Pm",
  })
  @get()
  static getPm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pm",
  })
  @post("{id}")
  static createPm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
