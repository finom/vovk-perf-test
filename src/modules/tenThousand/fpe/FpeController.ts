import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpe")
export default class FpeController {
  @operation({
    summary: "Get Fpe",
  })
  @get()
  static getFpe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpe",
  })
  @post("{id}")
  static createFpe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
