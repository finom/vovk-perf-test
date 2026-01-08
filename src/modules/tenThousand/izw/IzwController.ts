import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izw")
export default class IzwController {
  @operation({
    summary: "Get Izw",
  })
  @get()
  static getIzw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izw",
  })
  @post("{id}")
  static createIzw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
