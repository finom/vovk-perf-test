import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezn")
export default class EznController {
  @operation({
    summary: "Get Ezn",
  })
  @get()
  static getEzn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezn",
  })
  @post("{id}")
  static createEzn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
