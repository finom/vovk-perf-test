import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvd")
export default class DvdController {
  @operation({
    summary: "Get Dvd",
  })
  @get()
  static getDvd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvd",
  })
  @post("{id}")
  static createDvd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
