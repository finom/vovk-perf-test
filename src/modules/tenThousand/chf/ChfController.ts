import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("chf")
export default class ChfController {
  @operation({
    summary: "Get Chf",
  })
  @get()
  static getChf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chf",
  })
  @post("{id}")
  static createChf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
