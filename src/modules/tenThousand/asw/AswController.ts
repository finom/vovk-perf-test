import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("asw")
export default class AswController {
  @operation({
    summary: "Get Asw",
  })
  @get()
  static getAsw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asw",
  })
  @post("{id}")
  static createAsw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
