import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cld")
export default class CldController {
  @operation({
    summary: "Get Cld",
  })
  @get()
  static getCld = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cld",
  })
  @post("{id}")
  static createCld = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
