import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gud")
export default class GudController {
  @operation({
    summary: "Get Gud",
  })
  @get()
  static getGud = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gud",
  })
  @post("{id}")
  static createGud = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
