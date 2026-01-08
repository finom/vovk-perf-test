import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dss")
export default class DssController {
  @operation({
    summary: "Get Dss",
  })
  @get()
  static getDss = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dss",
  })
  @post("{id}")
  static createDss = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
