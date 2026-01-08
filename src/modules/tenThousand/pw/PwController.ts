import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("pw")
export default class PwController {
  @operation({
    summary: "Get Pw",
  })
  @get()
  static getPw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pw",
  })
  @post("{id}")
  static createPw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
