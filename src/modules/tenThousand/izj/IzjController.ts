import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izj")
export default class IzjController {
  @operation({
    summary: "Get Izj",
  })
  @get()
  static getIzj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izj",
  })
  @post("{id}")
  static createIzj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
