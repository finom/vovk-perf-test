import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("msw")
export default class MswController {
  @operation({
    summary: "Get Msw",
  })
  @get()
  static getMsw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msw",
  })
  @post("{id}")
  static createMsw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
