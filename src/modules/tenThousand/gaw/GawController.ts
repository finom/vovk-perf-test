import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gaw")
export default class GawController {
  @operation({
    summary: "Get Gaw",
  })
  @get()
  static getGaw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gaw",
  })
  @post("{id}")
  static createGaw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
