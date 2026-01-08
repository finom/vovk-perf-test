import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nsv")
export default class NsvController {
  @operation({
    summary: "Get Nsv",
  })
  @get()
  static getNsv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsv",
  })
  @post("{id}")
  static createNsv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
