import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ihh")
export default class IhhController {
  @operation({
    summary: "Get Ihh",
  })
  @get()
  static getIhh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihh",
  })
  @post("{id}")
  static createIhh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
