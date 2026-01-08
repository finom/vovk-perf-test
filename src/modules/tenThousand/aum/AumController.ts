import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aum")
export default class AumController {
  @operation({
    summary: "Get Aum",
  })
  @get()
  static getAum = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aum",
  })
  @post("{id}")
  static createAum = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
