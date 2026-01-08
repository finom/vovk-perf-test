import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izd")
export default class IzdController {
  @operation({
    summary: "Get Izd",
  })
  @get()
  static getIzd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izd",
  })
  @post("{id}")
  static createIzd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
