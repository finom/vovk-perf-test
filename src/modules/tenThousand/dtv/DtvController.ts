import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dtv")
export default class DtvController {
  @operation({
    summary: "Get Dtv",
  })
  @get()
  static getDtv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtv",
  })
  @post("{id}")
  static createDtv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
