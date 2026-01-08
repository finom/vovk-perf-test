import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mtr")
export default class MtrController {
  @operation({
    summary: "Get Mtr",
  })
  @get()
  static getMtr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtr",
  })
  @post("{id}")
  static createMtr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
