import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqc")
export default class AqcController {
  @operation({
    summary: "Get Aqc",
  })
  @get()
  static getAqc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqc",
  })
  @post("{id}")
  static createAqc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
