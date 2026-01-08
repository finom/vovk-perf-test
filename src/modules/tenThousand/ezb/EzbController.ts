import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezb")
export default class EzbController {
  @operation({
    summary: "Get Ezb",
  })
  @get()
  static getEzb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezb",
  })
  @post("{id}")
  static createEzb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
