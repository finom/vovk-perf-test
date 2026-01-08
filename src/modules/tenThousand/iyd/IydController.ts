import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iyd")
export default class IydController {
  @operation({
    summary: "Get Iyd",
  })
  @get()
  static getIyd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyd",
  })
  @post("{id}")
  static createIyd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
