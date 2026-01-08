import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gcf")
export default class GcfController {
  @operation({
    summary: "Get Gcf",
  })
  @get()
  static getGcf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcf",
  })
  @post("{id}")
  static createGcf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
