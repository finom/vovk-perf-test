import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kmh")
export default class KmhController {
  @operation({
    summary: "Get Kmh",
  })
  @get()
  static getKmh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmh",
  })
  @post("{id}")
  static createKmh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
