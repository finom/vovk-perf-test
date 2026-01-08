import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwf")
export default class KwfController {
  @operation({
    summary: "Get Kwf",
  })
  @get()
  static getKwf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwf",
  })
  @post("{id}")
  static createKwf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
