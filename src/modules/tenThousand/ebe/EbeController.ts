import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebe")
export default class EbeController {
  @operation({
    summary: "Get Ebe",
  })
  @get()
  static getEbe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebe",
  })
  @post("{id}")
  static createEbe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
