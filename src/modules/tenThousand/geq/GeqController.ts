import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("geq")
export default class GeqController {
  @operation({
    summary: "Get Geq",
  })
  @get()
  static getGeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Geq",
  })
  @post("{id}")
  static createGeq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
