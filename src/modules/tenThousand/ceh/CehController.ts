import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ceh")
export default class CehController {
  @operation({
    summary: "Get Ceh",
  })
  @get()
  static getCeh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ceh",
  })
  @post("{id}")
  static createCeh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
