import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ecf")
export default class EcfController {
  @operation({
    summary: "Get Ecf",
  })
  @get()
  static getEcf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecf",
  })
  @post("{id}")
  static createEcf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
