import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gaf")
export default class GafController {
  @operation({
    summary: "Get Gaf",
  })
  @get()
  static getGaf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gaf",
  })
  @post("{id}")
  static createGaf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
