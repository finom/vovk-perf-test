import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdu")
export default class JduController {
  @operation({
    summary: "Get Jdu",
  })
  @get()
  static getJdu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdu",
  })
  @post("{id}")
  static createJdu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
