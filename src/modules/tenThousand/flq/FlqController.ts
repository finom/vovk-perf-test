import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("flq")
export default class FlqController {
  @operation({
    summary: "Get Flq",
  })
  @get()
  static getFlq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flq",
  })
  @post("{id}")
  static createFlq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
