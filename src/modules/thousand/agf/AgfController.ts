import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("agf")
export default class AgfController {
  @operation({
    summary: "Get Agf",
  })
  @get()
  static getAgf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agf",
  })
  @post("{id}")
  static createAgf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
