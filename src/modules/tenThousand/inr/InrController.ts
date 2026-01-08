import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("inr")
export default class InrController {
  @operation({
    summary: "Get Inr",
  })
  @get()
  static getInr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inr",
  })
  @post("{id}")
  static createInr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
