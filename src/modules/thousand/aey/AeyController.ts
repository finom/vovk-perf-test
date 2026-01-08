import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aey")
export default class AeyController {
  @operation({
    summary: "Get Aey",
  })
  @get()
  static getAey = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aey",
  })
  @post("{id}")
  static createAey = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
