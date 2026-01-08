import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("knf")
export default class KnfController {
  @operation({
    summary: "Get Knf",
  })
  @get()
  static getKnf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knf",
  })
  @post("{id}")
  static createKnf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
