import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cnf")
export default class CnfController {
  @operation({
    summary: "Get Cnf",
  })
  @get()
  static getCnf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnf",
  })
  @post("{id}")
  static createCnf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
