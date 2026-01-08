import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdo")
export default class CdoController {
  @operation({
    summary: "Get Cdo",
  })
  @get()
  static getCdo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdo",
  })
  @post("{id}")
  static createCdo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
