import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cja")
export default class CjaController {
  @operation({
    summary: "Get Cja",
  })
  @get()
  static getCja = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cja",
  })
  @post("{id}")
  static createCja = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
