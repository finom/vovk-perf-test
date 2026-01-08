import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("irn")
export default class IrnController {
  @operation({
    summary: "Get Irn",
  })
  @get()
  static getIrn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irn",
  })
  @post("{id}")
  static createIrn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
