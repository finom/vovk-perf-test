import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("um")
export default class UmController {
  @operation({
    summary: "Get Um",
  })
  @get()
  static getUm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Um",
  })
  @post("{id}")
  static createUm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
