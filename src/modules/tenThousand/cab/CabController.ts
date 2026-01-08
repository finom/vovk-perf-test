import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cab")
export default class CabController {
  @operation({
    summary: "Get Cab",
  })
  @get()
  static getCab = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cab",
  })
  @post("{id}")
  static createCab = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
