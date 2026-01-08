import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cem")
export default class CemController {
  @operation({
    summary: "Get Cem",
  })
  @get()
  static getCem = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cem",
  })
  @post("{id}")
  static createCem = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
