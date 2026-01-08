import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgb")
export default class CgbController {
  @operation({
    summary: "Get Cgb",
  })
  @get()
  static getCgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgb",
  })
  @post("{id}")
  static createCgb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
