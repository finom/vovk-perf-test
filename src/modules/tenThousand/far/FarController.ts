import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("far")
export default class FarController {
  @operation({
    summary: "Get Far",
  })
  @get()
  static getFar = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Far",
  })
  @post("{id}")
  static createFar = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
