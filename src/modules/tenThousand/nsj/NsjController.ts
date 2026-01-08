import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nsj")
export default class NsjController {
  @operation({
    summary: "Get Nsj",
  })
  @get()
  static getNsj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsj",
  })
  @post("{id}")
  static createNsj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
