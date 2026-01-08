import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azj")
export default class AzjController {
  @operation({
    summary: "Get Azj",
  })
  @get()
  static getAzj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azj",
  })
  @post("{id}")
  static createAzj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
