import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eov")
export default class EovController {
  @operation({
    summary: "Get Eov",
  })
  @get()
  static getEov = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eov",
  })
  @post("{id}")
  static createEov = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
