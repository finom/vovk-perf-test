import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("af")
export default class AfController {
  @operation({
    summary: "Get Af",
  })
  @get()
  static getAf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Af",
  })
  @post("{id}")
  static createAf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
