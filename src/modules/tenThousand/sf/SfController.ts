import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("sf")
export default class SfController {
  @operation({
    summary: "Get Sf",
  })
  @get()
  static getSf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sf",
  })
  @post("{id}")
  static createSf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
