import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ima")
export default class ImaController {
  @operation({
    summary: "Get Ima",
  })
  @get()
  static getIma = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ima",
  })
  @post("{id}")
  static createIma = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
