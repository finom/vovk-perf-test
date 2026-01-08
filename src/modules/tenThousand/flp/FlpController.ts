import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("flp")
export default class FlpController {
  @operation({
    summary: "Get Flp",
  })
  @get()
  static getFlp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flp",
  })
  @post("{id}")
  static createFlp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
