import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezf")
export default class EzfController {
  @operation({
    summary: "Get Ezf",
  })
  @get()
  static getEzf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezf",
  })
  @post("{id}")
  static createEzf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
