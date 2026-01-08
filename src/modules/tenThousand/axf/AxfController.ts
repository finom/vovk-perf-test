import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axf")
export default class AxfController {
  @operation({
    summary: "Get Axf",
  })
  @get()
  static getAxf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axf",
  })
  @post("{id}")
  static createAxf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
