import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("erp")
export default class ErpController {
  @operation({
    summary: "Get Erp",
  })
  @get()
  static getErp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Erp",
  })
  @post("{id}")
  static createErp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
