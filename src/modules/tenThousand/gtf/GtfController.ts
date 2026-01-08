import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gtf")
export default class GtfController {
  @operation({
    summary: "Get Gtf",
  })
  @get()
  static getGtf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtf",
  })
  @post("{id}")
  static createGtf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
