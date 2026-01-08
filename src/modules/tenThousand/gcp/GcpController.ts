import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gcp")
export default class GcpController {
  @operation({
    summary: "Get Gcp",
  })
  @get()
  static getGcp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcp",
  })
  @post("{id}")
  static createGcp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
