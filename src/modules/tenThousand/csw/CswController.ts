import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("csw")
export default class CswController {
  @operation({
    summary: "Get Csw",
  })
  @get()
  static getCsw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csw",
  })
  @post("{id}")
  static createCsw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
