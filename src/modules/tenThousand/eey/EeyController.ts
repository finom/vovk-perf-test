import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eey")
export default class EeyController {
  @operation({
    summary: "Get Eey",
  })
  @get()
  static getEey = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eey",
  })
  @post("{id}")
  static createEey = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
