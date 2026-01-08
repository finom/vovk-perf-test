import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aus")
export default class AusController {
  @operation({
    summary: "Get Aus",
  })
  @get()
  static getAus = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aus",
  })
  @post("{id}")
  static createAus = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
