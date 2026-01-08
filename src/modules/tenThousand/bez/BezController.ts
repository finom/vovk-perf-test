import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bez")
export default class BezController {
  @operation({
    summary: "Get Bez",
  })
  @get()
  static getBez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bez",
  })
  @post("{id}")
  static createBez = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
