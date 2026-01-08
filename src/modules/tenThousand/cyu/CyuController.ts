import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cyu")
export default class CyuController {
  @operation({
    summary: "Get Cyu",
  })
  @get()
  static getCyu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyu",
  })
  @post("{id}")
  static createCyu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
