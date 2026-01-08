import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gtj")
export default class GtjController {
  @operation({
    summary: "Get Gtj",
  })
  @get()
  static getGtj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtj",
  })
  @post("{id}")
  static createGtj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
