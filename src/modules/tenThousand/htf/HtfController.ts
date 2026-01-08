import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("htf")
export default class HtfController {
  @operation({
    summary: "Get Htf",
  })
  @get()
  static getHtf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htf",
  })
  @post("{id}")
  static createHtf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
