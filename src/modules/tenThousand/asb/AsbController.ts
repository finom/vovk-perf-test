import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("asb")
export default class AsbController {
  @operation({
    summary: "Get Asb",
  })
  @get()
  static getAsb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asb",
  })
  @post("{id}")
  static createAsb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
