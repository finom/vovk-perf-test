import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mil")
export default class MilController {
  @operation({
    summary: "Get Mil",
  })
  @get()
  static getMil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mil",
  })
  @post("{id}")
  static createMil = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
