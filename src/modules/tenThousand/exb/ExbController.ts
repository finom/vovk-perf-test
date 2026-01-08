import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exb")
export default class ExbController {
  @operation({
    summary: "Get Exb",
  })
  @get()
  static getExb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exb",
  })
  @post("{id}")
  static createExb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
