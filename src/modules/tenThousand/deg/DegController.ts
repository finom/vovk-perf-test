import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("deg")
export default class DegController {
  @operation({
    summary: "Get Deg",
  })
  @get()
  static getDeg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Deg",
  })
  @post("{id}")
  static createDeg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
