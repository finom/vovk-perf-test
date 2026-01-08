import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpt")
export default class HptController {
  @operation({
    summary: "Get Hpt",
  })
  @get()
  static getHpt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpt",
  })
  @post("{id}")
  static createHpt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
