import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("enr")
export default class EnrController {
  @operation({
    summary: "Get Enr",
  })
  @get()
  static getEnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Enr",
  })
  @post("{id}")
  static createEnr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
