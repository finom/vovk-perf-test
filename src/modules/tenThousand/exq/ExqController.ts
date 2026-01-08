import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exq")
export default class ExqController {
  @operation({
    summary: "Get Exq",
  })
  @get()
  static getExq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exq",
  })
  @post("{id}")
  static createExq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
