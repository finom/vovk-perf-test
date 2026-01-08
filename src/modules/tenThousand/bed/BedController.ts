import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bed")
export default class BedController {
  @operation({
    summary: "Get Bed",
  })
  @get()
  static getBed = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bed",
  })
  @post("{id}")
  static createBed = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
