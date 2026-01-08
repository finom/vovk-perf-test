import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpw")
export default class CpwController {
  @operation({
    summary: "Get Cpw",
  })
  @get()
  static getCpw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpw",
  })
  @post("{id}")
  static createCpw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
