import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izc")
export default class IzcController {
  @operation({
    summary: "Get Izc",
  })
  @get()
  static getIzc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izc",
  })
  @post("{id}")
  static createIzc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
