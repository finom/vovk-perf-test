import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwc")
export default class DwcController {
  @operation({
    summary: "Get Dwc",
  })
  @get()
  static getDwc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwc",
  })
  @post("{id}")
  static createDwc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
