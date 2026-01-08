import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngj")
export default class NgjController {
  @operation({
    summary: "Get Ngj",
  })
  @get()
  static getNgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngj",
  })
  @post("{id}")
  static createNgj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
