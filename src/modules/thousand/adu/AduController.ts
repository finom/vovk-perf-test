import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("adu")
export default class AduController {
  @operation({
    summary: "Get Adu",
  })
  @get()
  static getAdu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adu",
  })
  @post("{id}")
  static createAdu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
