import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvf")
export default class DvfController {
  @operation({
    summary: "Get Dvf",
  })
  @get()
  static getDvf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvf",
  })
  @post("{id}")
  static createDvf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
