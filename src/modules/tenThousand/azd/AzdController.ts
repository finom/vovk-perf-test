import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azd")
export default class AzdController {
  @operation({
    summary: "Get Azd",
  })
  @get()
  static getAzd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azd",
  })
  @post("{id}")
  static createAzd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
