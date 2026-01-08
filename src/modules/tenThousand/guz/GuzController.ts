import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("guz")
export default class GuzController {
  @operation({
    summary: "Get Guz",
  })
  @get()
  static getGuz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Guz",
  })
  @post("{id}")
  static createGuz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
