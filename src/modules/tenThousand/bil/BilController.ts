import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bil")
export default class BilController {
  @operation({
    summary: "Get Bil",
  })
  @get()
  static getBil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bil",
  })
  @post("{id}")
  static createBil = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
