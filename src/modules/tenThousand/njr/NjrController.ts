import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("njr")
export default class NjrController {
  @operation({
    summary: "Get Njr",
  })
  @get()
  static getNjr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njr",
  })
  @post("{id}")
  static createNjr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
