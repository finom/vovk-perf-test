import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("das")
export default class DasController {
  @operation({
    summary: "Get Das",
  })
  @get()
  static getDas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Das",
  })
  @post("{id}")
  static createDas = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
