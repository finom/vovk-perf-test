import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ihw")
export default class IhwController {
  @operation({
    summary: "Get Ihw",
  })
  @get()
  static getIhw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihw",
  })
  @post("{id}")
  static createIhw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
