import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzt")
export default class DztController {
  @operation({
    summary: "Get Dzt",
  })
  @get()
  static getDzt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzt",
  })
  @post("{id}")
  static createDzt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
