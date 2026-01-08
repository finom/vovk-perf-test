import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fec")
export default class FecController {
  @operation({
    summary: "Get Fec",
  })
  @get()
  static getFec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fec",
  })
  @post("{id}")
  static createFec = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
