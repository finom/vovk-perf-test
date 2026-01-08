import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("baw")
export default class BawController {
  @operation({
    summary: "Get Baw",
  })
  @get()
  static getBaw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Baw",
  })
  @post("{id}")
  static createBaw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
