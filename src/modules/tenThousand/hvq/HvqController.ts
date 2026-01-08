import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvq")
export default class HvqController {
  @operation({
    summary: "Get Hvq",
  })
  @get()
  static getHvq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvq",
  })
  @post("{id}")
  static createHvq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
