import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kg")
export default class KgController {
  @operation({
    summary: "Get Kg",
  })
  @get()
  static getKg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kg",
  })
  @post("{id}")
  static createKg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
