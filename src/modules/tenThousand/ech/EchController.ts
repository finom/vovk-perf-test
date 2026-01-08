import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ech")
export default class EchController {
  @operation({
    summary: "Get Ech",
  })
  @get()
  static getEch = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ech",
  })
  @post("{id}")
  static createEch = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
