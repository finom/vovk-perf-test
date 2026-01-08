import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lic")
export default class LicController {
  @operation({
    summary: "Get Lic",
  })
  @get()
  static getLic = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lic",
  })
  @post("{id}")
  static createLic = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
