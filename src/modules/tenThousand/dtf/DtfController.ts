import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dtf")
export default class DtfController {
  @operation({
    summary: "Get Dtf",
  })
  @get()
  static getDtf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtf",
  })
  @post("{id}")
  static createDtf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
