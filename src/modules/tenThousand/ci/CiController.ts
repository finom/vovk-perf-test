import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ci")
export default class CiController {
  @operation({
    summary: "Get Ci",
  })
  @get()
  static getCi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ci",
  })
  @post("{id}")
  static createCi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
