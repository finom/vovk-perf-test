import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("acf")
export default class AcfController {
  @operation({
    summary: "Get Acf",
  })
  @get()
  static getAcf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acf",
  })
  @post("{id}")
  static createAcf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
