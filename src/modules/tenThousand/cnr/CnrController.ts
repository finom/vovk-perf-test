import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cnr")
export default class CnrController {
  @operation({
    summary: "Get Cnr",
  })
  @get()
  static getCnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnr",
  })
  @post("{id}")
  static createCnr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
