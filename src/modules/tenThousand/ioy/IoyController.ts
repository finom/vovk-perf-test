import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ioy")
export default class IoyController {
  @operation({
    summary: "Get Ioy",
  })
  @get()
  static getIoy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ioy",
  })
  @post("{id}")
  static createIoy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
