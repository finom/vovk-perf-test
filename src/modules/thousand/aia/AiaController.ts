import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aia")
export default class AiaController {
  @operation({
    summary: "Get Aia",
  })
  @get()
  static getAia = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aia",
  })
  @post("{id}")
  static createAia = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
