import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cnp")
export default class CnpController {
  @operation({
    summary: "Get Cnp",
  })
  @get()
  static getCnp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnp",
  })
  @post("{id}")
  static createCnp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
