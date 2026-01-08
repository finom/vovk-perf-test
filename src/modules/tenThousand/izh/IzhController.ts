import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izh")
export default class IzhController {
  @operation({
    summary: "Get Izh",
  })
  @get()
  static getIzh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izh",
  })
  @post("{id}")
  static createIzh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
