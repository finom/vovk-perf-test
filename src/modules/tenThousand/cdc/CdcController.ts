import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdc")
export default class CdcController {
  @operation({
    summary: "Get Cdc",
  })
  @get()
  static getCdc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdc",
  })
  @post("{id}")
  static createCdc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
