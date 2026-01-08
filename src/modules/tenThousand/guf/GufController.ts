import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("guf")
export default class GufController {
  @operation({
    summary: "Get Guf",
  })
  @get()
  static getGuf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Guf",
  })
  @post("{id}")
  static createGuf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
