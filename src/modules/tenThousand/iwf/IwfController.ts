import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwf")
export default class IwfController {
  @operation({
    summary: "Get Iwf",
  })
  @get()
  static getIwf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwf",
  })
  @post("{id}")
  static createIwf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
