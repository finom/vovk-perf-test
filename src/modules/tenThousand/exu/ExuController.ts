import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exu")
export default class ExuController {
  @operation({
    summary: "Get Exu",
  })
  @get()
  static getExu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exu",
  })
  @post("{id}")
  static createExu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
