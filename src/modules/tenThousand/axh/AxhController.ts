import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axh")
export default class AxhController {
  @operation({
    summary: "Get Axh",
  })
  @get()
  static getAxh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axh",
  })
  @post("{id}")
  static createAxh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
