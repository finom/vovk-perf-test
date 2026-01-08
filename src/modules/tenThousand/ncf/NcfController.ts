import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ncf")
export default class NcfController {
  @operation({
    summary: "Get Ncf",
  })
  @get()
  static getNcf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncf",
  })
  @post("{id}")
  static createNcf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
