import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iz")
export default class IzController {
  @operation({
    summary: "Get Iz",
  })
  @get()
  static getIz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iz",
  })
  @post("{id}")
  static createIz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
