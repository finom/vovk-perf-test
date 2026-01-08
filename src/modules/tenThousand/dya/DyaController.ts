import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dya")
export default class DyaController {
  @operation({
    summary: "Get Dya",
  })
  @get()
  static getDya = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dya",
  })
  @post("{id}")
  static createDya = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
