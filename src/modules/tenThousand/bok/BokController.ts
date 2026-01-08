import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bok")
export default class BokController {
  @operation({
    summary: "Get Bok",
  })
  @get()
  static getBok = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bok",
  })
  @post("{id}")
  static createBok = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
