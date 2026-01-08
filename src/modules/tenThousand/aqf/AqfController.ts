import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqf")
export default class AqfController {
  @operation({
    summary: "Get Aqf",
  })
  @get()
  static getAqf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqf",
  })
  @post("{id}")
  static createAqf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
