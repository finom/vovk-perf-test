import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cap")
export default class CapController {
  @operation({
    summary: "Get Cap",
  })
  @get()
  static getCap = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cap",
  })
  @post("{id}")
  static createCap = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
