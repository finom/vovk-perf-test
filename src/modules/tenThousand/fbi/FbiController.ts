import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbi")
export default class FbiController {
  @operation({
    summary: "Get Fbi",
  })
  @get()
  static getFbi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbi",
  })
  @post("{id}")
  static createFbi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
