import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cci")
export default class CciController {
  @operation({
    summary: "Get Cci",
  })
  @get()
  static getCci = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cci",
  })
  @post("{id}")
  static createCci = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
