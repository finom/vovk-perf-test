import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqr")
export default class AqrController {
  @operation({
    summary: "Get Aqr",
  })
  @get()
  static getAqr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqr",
  })
  @post("{id}")
  static createAqr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
