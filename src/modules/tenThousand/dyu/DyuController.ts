import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dyu")
export default class DyuController {
  @operation({
    summary: "Get Dyu",
  })
  @get()
  static getDyu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyu",
  })
  @post("{id}")
  static createDyu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
