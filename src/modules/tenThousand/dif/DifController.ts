import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dif")
export default class DifController {
  @operation({
    summary: "Get Dif",
  })
  @get()
  static getDif = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dif",
  })
  @post("{id}")
  static createDif = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
