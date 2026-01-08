import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvl")
export default class DvlController {
  @operation({
    summary: "Get Dvl",
  })
  @get()
  static getDvl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvl",
  })
  @post("{id}")
  static createDvl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
