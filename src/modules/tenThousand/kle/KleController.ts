import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kle")
export default class KleController {
  @operation({
    summary: "Get Kle",
  })
  @get()
  static getKle = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kle",
  })
  @post("{id}")
  static createKle = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
